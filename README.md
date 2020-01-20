html-docx
============

this is a simple library to convert html to docx,it is based on the [html-doxc-js](https://github.com/evidenceprime/html-docx-js)

useage
-------------
#### Usage and demo
```
yarn add html-docx   npm install html-docx --save

import HtmlToDocx from 'html-docx'
HtmlDocx({
    exportElement: '#html-docx', // 需要转换为word的html标签
    exportFileName: 'list.docx', // 转换之后word文档的文件名称
    StringStyle: '', // css样式以字符串的形式插入进去
    margins:{top: 1440,right: 1440,bottom: 1440,left: 1440,header: 720,footer: 720,gutter: 0} // word的边距配置
})
```
#### use in-inline in html
[you can use it refer to the example useage](https://github.com/forever-chen/html-docx/blob/master/test/sample.html)

Compatibility
------------

This library should work on any modern browser that supports `Blobs` (either natively or via
[Blob.js](https://github.com/eligrey/Blob.js/)). It was tested on Google Chrome 36, Safari 7 and
Internet Explorer 10.

Images Support
------------

images/cavans is supported in the library
the src of images can be URI or inlined base64
cavans can be generate by common charts library or protogenetic


API
------------
##### `<div id="html-docx-config">`
* the container is used to set the WORD that you will convert
##### `<div id="page-header" textAlign='right'>我的新世界</div>` 
* the element is used to control the header of word
* the property is used to set the position of the header
* the innerText of the element is content of the header
##### `<div id="first-page" titlePg='false'><div style='text-align: center;'>dfsdfsdf</div></div> `
* the element is used to control the header of first page,if the first titlePage is needless for you ,you can skip the element
* the property(titlePg) is used to defined the first page whether or not the same
* you can edite any html element in the element
#### `<div id="page-content"></div>`
* the element is used to control the content of word,if you neednot the content,you can skip the element
#### `<div class="change-line"></div>`
* if you want to start with a new page, you can used the element
* you can you use id any time only if you want
#### `<div id="page-footer"></div>`
* the element is used to control the header of word
* it can only be used to disply page number

reminder
-------------
**all classNames or Id of elements in API cannot be changed**
**you had better use protogenetic element in html so that the word can convert accurately**

License
-------

Copyright (c) 2015 Evidence Prime, Inc.
See the LICENSE file for license rights and limitations (MIT).
