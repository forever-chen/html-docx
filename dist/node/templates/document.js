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
__p += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" \r\n  xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex" \r\n  xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex" \r\n  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" \r\n  xmlns:o="urn:schemas-microsoft-com:office:office" \r\n  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" \r\n  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" \r\n  xmlns:v="urn:schemas-microsoft-com:vml" \r\n  xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" \r\n  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" \r\n  xmlns:w10="urn:schemas-microsoft-com:office:word" \r\n  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" \r\n  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" \r\n  xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" \r\n  xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex" \r\n  xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" \r\n  xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" \r\n  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" \r\n  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 w15 w16se wp14">\r\n  <w:body>\r\n    <w:altChunk r:id="htmlChunk1" />\r\n    <w:altChunk r:id="htmlChunk" />\r\n    <w:sectPr w:rsidR="005F2BDF" w:rsidRPr="005F2BDF" w:rsidSect="005F2BDF">\r\n      <w:headerReference w:type="default" r:id="rId7"/>\r\n      <w:footerReference w:type="default" r:id="rId8"/>\r\n      <w:pgSz w:w="' +
((__t = ( width )) == null ? '' : __t) +
'" w:h="' +
((__t = ( height )) == null ? '' : __t) +
'" w:orient="' +
((__t = ( orient )) == null ? '' : __t) +
'" />\r\n      <w:pgMar w:top="' +
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
'"/>\r\n      <w:cols w:space="425"/>\r\n      <w:titlePg/>\r\n      <w:docGrid w:type="lines" w:linePitch="312"/>\r\n    </w:sectPr>\r\n  </w:body>\r\n</w:document>';

}
return __p
}