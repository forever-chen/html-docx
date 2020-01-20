(function(){
    // 导出文件
    if(typeof $==='undefined'){
        console.error('please require the jquery')
        return
	}
	function HtmlToDocx(params){
        var exportElement = params.exportElement
        var exportFileName = params.exportFileName
        var StringStyle = params.StringStyle?params.StringStyle:"#main,	#main1 {height: 400px;width: 630px	}	.list {background: blue;padding: 10px	}	.list .page {background: yellow;padding: 5px;height: 20px;	}	.img {padding: 50px;	}	table {align-text: center;width: 100%;vertical-align: middle;border-top: 1px solid #ddd;border-left: 1px solid #ddd;	}	table td,	table th {width: 20%;height: 40px;border-right: 1px solid #ddd;border-bottom: 1px solid #ddd;	}	table p {text-indent: 0 !important;text-align: center;	}"
        var fileParams = params.fileParams
		var fistPageContent = $('#html-docx-config').html()
		var config =getDocumentConfig()
        var Id = '#temporaryExportElement'
		$("<div id='temporaryExportElement'></div>").html($(exportElement).html()).appendTo(document.body)
		convertEchartToImage(exportElement,Id)
        convertImagesToBase64()
		var content = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head></head><style>"+(StringStyle?StringStyle.replace(/(\s{2,}|\n)/g,''):'')+"</style><body>" + $(Id).html().replace(/\s{2,}/g, '') + "</body></html>";
		var fileParam = fileParams||{}
        var htmlContent = [content,config.firstPage]
        console.log(config)
		var converted = htmlDocx.asBlob(htmlContent, {
			margins: fileParam.margins,
			config:config
		});
		$('#temporaryExportElement').remove()
		saveAs(converted, exportFileName);
		if(config.firstPage){
			$('#html-docx-config').html(fistPageContent)
		}
	}
	// 把图片转为base64
	function convertImagesToBase64() {
		var regularImages = document.querySelectorAll("img");
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		[].forEach.call(regularImages, function (imgElement) {
			var imgElement = new Image();
			//设置图片跨域访问
			imgElement.setAttribute('crossOrigin', 'anonymous');
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvas.width = imgElement.width;
			canvas.height = imgElement.height;
			ctx.drawImage(imgElement, 0, 0);
			// by default toDataURL() produces png image, but you can also export to jpeg
			// checkout function's documentation for more details
			var dataURL = canvas.toDataURL();
			imgElement.setAttribute('src', dataURL);
		})
		canvas.remove();
	}
	// 把echarts图表转为base64
	function convertEchartToImage(exportElement,Id) {
		var canva = $(exportElement).find('canvas');
		var emptyChart = $(Id).find('canvas');
		for (var i = 0; i < canva.length; i++) {
			var targetParent = $(emptyChart[i]).parent().parent()
			var uri = canva[i].toDataURL('image/jpg');
			$(targetParent).empty()
			$('<img/>').attr({
				"src": uri,
				width: $(canva[i]).width(),
				height: $(canva[i]).height()
			}).appendTo(targetParent)
		}
	}
	// 获取文档中word文档配置信息
	function getDocumentConfig(){
		// 处理页眉
		var header = $('#page-header')
		$('#page-header').attr({data:header.html()}).html('')
		// 处理首页
		var firstPageContent=''
		if($('#first-page').length&&$('#page-content').length){
			firstPageContent = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head></head><body>" + $($('#first-page')).html().replace(/\s{2,}/g, '') + "</body></html>";
			$('#first-page').html('')
		}
		// 处理目录
		var content = $('#page-content')
		// 处理换行
		$('<br clear=all style="page-break-before:always" mce_style="page-break-before:always">').insertAfter($('.change-line'))
		var footer = $('#page-footer')
		return {
			header:{text:header.attr('data')||'',align:header.attr('textAlign')||'right'},
			footer:footer.length?true:false,
			content:content.length,
			firstPage:firstPageContent,
			titlePg:$('#first-page').length&&$('#first-page').attr('titlePg')==='true'?true:false
		}
	}
	var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" &&
	    /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						window.open(object_url, "_blank");
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	saveAs.unload = function() {
		process_deletion_queue();
		view.removeEventListener("unload", process_deletion_queue, false);
	};
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module !== null) {
  module.exports = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
  define([], function() {
    return saveAs;
  });
}
if (typeof module !== "undefined" && module !== null) {
    module.exports = HtmlToDocx;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    define([], function() {
        return HtmlToDocx;
    });
}else if("undefined"!=typeof window){
    window.HtmlToDocx = HtmlToDocx
}
}
)()