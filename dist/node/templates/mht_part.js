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
__p += '------=mhtDocumentPart\r\nContent-Type: ' +
((__t = ( contentType )) == null ? '' : __t) +
'\r\nContent-Transfer-Encoding: ' +
((__t = ( contentEncoding )) == null ? '' : __t) +
'\r\nContent-Location: ' +
((__t = ( contentLocation )) == null ? '' : __t) +
'\r\n\r\n' +
((__t = ( encodedContent )) == null ? '' : __t) +
'\r\n';

}
return __p
}