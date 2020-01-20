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
__p += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<w:document\r\n  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"\r\n  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"\r\n  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"\r\n  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"\r\n  xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"\r\n  xmlns:ns6="http://schemas.openxmlformats.org/schemaLibrary/2006/main"\r\n  xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"\r\n  xmlns:ns8="http://schemas.openxmlformats.org/drawingml/2006/chartDrawing"\r\n  xmlns:dgm="http://schemas.openxmlformats.org/drawingml/2006/diagram"\r\n  xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"\r\n  xmlns:ns11="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"\r\n  xmlns:dsp="http://schemas.microsoft.com/office/drawing/2008/diagram"\r\n  xmlns:ns13="urn:schemas-microsoft-com:office:excel"\r\n  xmlns:o="urn:schemas-microsoft-com:office:office"\r\n  xmlns:v="urn:schemas-microsoft-com:vml"\r\n  xmlns:w10="urn:schemas-microsoft-com:office:word"\r\n  xmlns:ns17="urn:schemas-microsoft-com:office:powerpoint"\r\n  xmlns:odx="http://opendope.org/xpaths"\r\n  xmlns:odc="http://opendope.org/conditions"\r\n  xmlns:odq="http://opendope.org/questions"\r\n  xmlns:odi="http://opendope.org/components"\r\n  xmlns:odgm="http://opendope.org/SmartArt/DataHierarchy"\r\n  xmlns:ns24="http://schemas.openxmlformats.org/officeDocument/2006/bibliography"\r\n  xmlns:ns25="http://schemas.openxmlformats.org/drawingml/2006/compatibility"\r\n  xmlns:ns26="http://schemas.openxmlformats.org/drawingml/2006/lockedCanvas">\r\n  <w:body>\r\n    <w:altChunk r:id="htmlChunk" />\r\n    <w:sectPr>\r\n      <w:pgSz w:w="' +
((__t = ( width )) == null ? '' : __t) +
'" w:h="' +
((__t = ( height )) == null ? '' : __t) +
'" w:orient="' +
((__t = ( orient )) == null ? '' : __t) +
'" />\r\n      <w:pgMar w:top="' +
((__t = ( margins.top )) == null ? '' : __t) +
'"\r\n               w:right="' +
((__t = ( margins.right )) == null ? '' : __t) +
'"\r\n               w:bottom="' +
((__t = ( margins.bottom )) == null ? '' : __t) +
'"\r\n               w:left="' +
((__t = ( margins.left )) == null ? '' : __t) +
'"\r\n               w:header="' +
((__t = ( margins.header )) == null ? '' : __t) +
'"\r\n               w:footer="' +
((__t = ( margins.footer )) == null ? '' : __t) +
'"\r\n               w:gutter="' +
((__t = ( margins.gutter )) == null ? '' : __t) +
'"/>\r\n    </w:sectPr>\r\n  </w:body>\r\n</w:document>\r\n';

}
return __p
}