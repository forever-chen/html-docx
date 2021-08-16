var _ = {};
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
};
var escapeRegexp = new RegExp('[' + Object.keys(escapeMap).join('') + ']', 'g');
_.escape = function(string) {
    if (!string) return '';
    return String(string).replace(escapeRegexp, function(match) {
        return escapeMap[match];
    });
};
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" \n  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex" \n  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex" \n  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" \n  xmlns:o="urn:schemas-microsoft-com:office:office" \n  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" \n  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" \n  xmlns:v="urn:schemas-microsoft-com:vml" \n  xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" \n  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" \n  xmlns:w10="urn:schemas-microsoft-com:office:word" \n  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" \n  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" \n  xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" \n  xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex" \n  xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" \n  xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" \n  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" \n  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 w15 w16se wp14">\n  <w:body>\n    <w:altChunk r:id="htmlChunk1" />\n    <w:p w:rsidR="00724FCD" w:rsidRPr="00D63140" w:rsidRDefault="00724FCD" w:rsidP="00D63140">\n      <w:pPr>\n        <w:pStyle w:val="2"/>\n      </w:pPr>\n      <w:r>\n        <w:br w:type="page"/>\n      </w:r>\n    </w:p>\n    <w:sdt>\n      <w:sdtPr>\n        <w:rPr>\n          <w:rFonts w:asciiTheme="minorHAnsi" w:eastAsiaTheme="minorEastAsia" w:hAnsiTheme="minorHAnsi" w:cstheme="minorBidi"/>\n          <w:color w:val="auto"/>\n          <w:kern w:val="2"/>\n          <w:sz w:val="21"/>\n          <w:szCs w:val="22"/>\n          <w:lang w:val="zh-CN"/>\n        </w:rPr>\n        <w:id w:val="-1194690127"/>\n        <w:docPartObj>\n          <w:docPartGallery w:val="Table of Contents"/>\n          <w:docPartUnique/>\n        </w:docPartObj>\n      </w:sdtPr>\n      <w:sdtEndPr>\n        <w:rPr>\n          <w:b/>\n          <w:bCs/>\n        </w:rPr>\n      </w:sdtEndPr>\n      <w:sdtContent>\n        <w:p w:rsidR="00724FCD" w:rsidRPr="00724FCD" w:rsidRDefault="00724FCD" w:rsidP="00724FCD">\n          <w:pPr>\n            <w:pStyle w:val="TOC"/>\n            <w:jc w:val="center"/>\n            <w:rPr>\n              <w:rFonts w:ascii="宋体" w:eastAsia="宋体" w:hAnsi="宋体"/>\n              <w:color w:val="auto"/>\n              <w:shd w:val="pct15" w:color="auto" w:fill="FFFFFF"/>\n            </w:rPr>\n          </w:pPr>\n          <w:r w:rsidRPr="00724FCD">\n            <w:rPr>\n              <w:rFonts w:ascii="宋体" w:eastAsia="宋体" w:hAnsi="宋体" w:hint="eastAsia"/>\n              <w:color w:val="auto"/>\n              <w:lang w:val="zh-CN"/>\n            </w:rPr>\n            <w:t>目录</w:t>\n          </w:r>\n        </w:p>\n        <w:p w:rsidR="00724FCD" w:rsidRDefault="00724FCD">\n          <w:fldSimple w:instr=" TOC \\o &quot;1-5&quot; \\h \\z \\u ">\n            <w:r w:rsidR="001D515B">\n              <w:rPr>\n                <w:rFonts w:hint="eastAsia"/>\n                <w:b/>\n                <w:bCs/>\n                <w:noProof/>\n              </w:rPr>\n              <w:t>未找到目录项。</w:t>\n            </w:r>\n          </w:fldSimple>\n        </w:p>\n      </w:sdtContent>\n    </w:sdt>\n    <w:p w:rsidR="00724FCD" w:rsidRDefault="00724FCD" w:rsidP="00D63140">\n      <w:pPr>\n        <w:pStyle w:val="21"/>\n      </w:pPr>\n      <w:r>\n        <w:br w:type="page"/>\n      </w:r>\n    </w:p>\n    <w:altChunk r:id="htmlChunk" />\n    <w:sectPr w:rsidR="005F2BDF" w:rsidRPr="005F2BDF" w:rsidSect="005F2BDF">\n      <w:headerReference w:type="default" r:id="rId7"/>\n      <w:footerReference w:type="default" r:id="rId8"/>\n      <w:pgSz w:w="' +
((__t = ( width )) == null ? '' : __t) +
'" w:h="' +
((__t = ( height )) == null ? '' : __t) +
'" w:orient="' +
((__t = ( orient )) == null ? '' : __t) +
'" />\n      <w:pgMar w:top="' +
((__t = ( margins.top )) == null ? '' : __t) +
'" w:right="' +
((__t = ( margins.right )) == null ? '' : __t) +
'" w:bottom="' +
((__t = ( margins.bottom )) == null ? '' : __t) +
'" w:left="' +
((__t = ( margins.left )) == null ? '' : __t) +
'" w:header="' +
((__t = ( margins.header )) == null ? '' : __t) +
'" w:footer="' +
((__t = ( margins.footer )) == null ? '' : __t) +
'" w:gutter="' +
((__t = ( margins.gutter )) == null ? '' : __t) +
'"/>\n      <w:cols w:space="425"/>\n      <w:titlePg/>\n      <w:docGrid w:type="lines" w:linePitch="312"/>\n    </w:sectPr>\n  </w:body>\n</w:document>';

}
return __p
}