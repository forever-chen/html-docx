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
__p += 'MIME-Version: 1.0\r\nContent-Type: multipart/related;\r\n    type="text/html";\r\n    boundary="----=mhtDocumentPart"\r\n\r\n\r\n------=mhtDocumentPart\r\nContent-Type: text/html;\r\n    charset="utf-8"\r\nContent-Transfer-Encoding: quoted-printable\r\nContent-Location: file:///C:/fake/document.html\r\n\r\n' +
((__t = ( htmlSource )) == null ? '' : __t) +
'\r\n\r\n' +
((__t = ( contentParts )) == null ? '' : __t) +
'\r\n\r\n------=mhtDocumentPart--\r\n';

}
return __p
}