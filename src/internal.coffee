fs = require 'fs'
documentTemplate = require './templates/document'
documentTemplate1 = require './templates/document1'

utils = require './utils'
_ = merge: require 'lodash.merge'

module.exports =
	generateDocument: (zip) ->
		buffer = zip.generate(type: 'arraybuffer')
		if global.Blob
			new Blob [buffer],
				type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		else if global.Buffer
			new Buffer new Uint8Array(buffer)
		else
			throw new Error "Neither Blob nor Buffer are accessible in this environment. " +
				"Consider adding Blob.js shim"

	renderDocumentFile: (documentOptions = {}) ->
		templateData = _.merge margins:
			top: 1440
			right: 1440
			bottom: 1440
			left: 1440
			header: 720
			footer: 720
			gutter: 0
		,
			switch documentOptions.orientation
				when 'landscape' then height: 12240, width: 15840, orient: 'landscape'
				else width: 12240, height: 15840, orient: 'portrait'
		,
			margins: documentOptions.margins
		,
			titlePg:documentOptions.config.titlePg
		if documentOptions.config.firstPage
			if documentOptions.config.titlePg 
				documentTemplate(templateData)	
			else
				documentTemplate1(templateData).replace(/<w:titlePg\/>/,'')
		else
			documentTemplate(templateData)
	renderFooter:(documentOptions={})->
		if documentOptions.config.footer
			fs.readFileSync __dirname + '/templateFile/word/footer1.xml'
		else
			(fs.readFileSync __dirname + '/templateFile/word/footer1.xml','utf-8').replace(/<w:pPr>[\\\s|\\\S]{1,}<\/w:pPr>/g,'')
	addFiles: (zip, htmlSource, documentOptions) ->
		zip.file '[Content_Types].xml', fs.readFileSync __dirname + '/templateFile/[Content_Types].xml'
		zip.folder('_rels').file '.rels', fs.readFileSync __dirname + '/templateFile/_rels/.rels'
		zip.folder('customXml').file 'item1.xml', fs.readFileSync __dirname + '/templateFile/customXml/item1.xml'
							   .file 'itemProps1.xml', fs.readFileSync __dirname + '/templateFile/customXml/itemProps1.xml'
							   .folder('_rels').file 'item1.xml.rels', fs.readFileSync __dirname + '/templateFile/customXml/_rels/item1.xml.rels'
		zip.folder('docProps').file 'app.xml',  fs.readFileSync __dirname + '/templateFile/docProps/app.xml'
							.file 'core.xml',  fs.readFileSync __dirname + '/templateFile/docProps/core.xml'
		zip.folder('word').file 'document.xml',  @renderDocumentFile documentOptions
						  .file 'afchunk.mht', utils.getMHTdocument htmlSource[0]
						  .file 'afchunk1.mht',  utils.getMHTdocument htmlSource[1]
						  .file 'endnotes.xml', fs.readFileSync __dirname + '/templateFile/word/endnotes.xml'
						  .file 'fontTable.xml', fs.readFileSync __dirname + '/templateFile/word/fontTable.xml'
						  .file 'footer1.xml', @renderFooter documentOptions
						  .file 'footnotes.xml', fs.readFileSync __dirname + '/templateFile/word/footnotes.xml'
						  .file 'settings.xml', (fs.readFileSync __dirname + '/templateFile/word/settings.xml','utf-8').replace(/w:val="true"/g,if documentOptions.config.content then 'w:val="true"' else 'w:val="false"')
						  .file 'styles.xml', fs.readFileSync __dirname + '/templateFile/word/styles.xml'
						  .file 'webSetting.xml', fs.readFileSync __dirname + '/templateFile/word/webSettings.xml'
						  .folder('_rels').file 'document.xml.rels', fs.readFileSync __dirname + '/templateFile/word/_rels/document.xml.rels'
		if documentOptions.config.header.text
			zip.folder('word').file 'header1.xml', (fs.readFileSync __dirname + '/templateFile/word/header1.xml','utf-8').replace(/就在新的世界/g,documentOptions.config.header.text).replace(/w:val="right"/g,'w:val="'+documentOptions.config.header.align+'"')
		zip.folder('word').folder('theme').file 'theme1.xml', fs.readFileSync __dirname + '/templateFile/word/theme/theme1.xml'
		zip.folder('word').folder('glossary').file 'document.xml', fs.readFileSync __dirname + '/templateFile/word/glossary/document.xml'
						  .file 'fontTable.xml', fs.readFileSync __dirname + '/templateFile/word/glossary/fontTable.xml'
						  .file 'settings.xml', fs.readFileSync __dirname + '/templateFile/word/glossary/settings.xml'
						  .file 'styles.xml', fs.readFileSync __dirname + '/templateFile/word/glossary/styles.xml'
						  .file 'webSettings.xml', fs.readFileSync __dirname + '/templateFile/word/glossary/webSettings.xml'
						  .folder('_rels').file 'document.xml.rels', fs.readFileSync __dirname + '/templateFile/word/glossary/_rels/document.xml.rels'
			
		