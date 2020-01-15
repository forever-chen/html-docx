function exportFile({exportElement, exportFileName, StringStyle,fileParams}) {
    var Id = '#temporaryExportElement'
    $("<div id='temporaryExportElement'></div>").html($(exportElement).html()).appendTo(document.body)
    convertEchartToImage(exportElement,Id)
    convertImagesToBase64()
    var content = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head></head><style>${StringStyle?StringStyle.replace(/(\s{2,}|\n)/g,''):''}</style><body>` + $(Id).html().replace(/\s{2,}/g, '') + "</body></html>";
    var fileParams = fileParams||{}
    var converted = htmlDocx.asBlob(content, {
        margins: fileParams.margin,
        extendData:fileParams.extendData
    });
    $('#temporaryExportElement').remove()
    saveAs(converted, `${exportFileName}`);
}
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
// module.exports = exportFile