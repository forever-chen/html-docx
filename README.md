html-docx
============

this is a simple library to convert html to docx

Compatibility
------------

This library should work on any modern browser that supports `Blobs` (either natively or via
[Blob.js](https://github.com/eligrey/Blob.js/)). It was tested on Google Chrome 36, Safari 7 and
Internet Explorer 10.

Images Support
------------

images/cavans is supported in the library
the src of images can be DATA URI or inlined base64
cavans can be generate by common charts library or protogenetic

Usage and demo
------------

you can use it refer to the example [useage](https://github.com/forever-chen/html-docx/blob/master/test/sample.html)

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
**all className or Id in element in API cannot be changed**


License
-------

Copyright (c) 2015 Evidence Prime, Inc.
See the LICENSE file for license rights and limitations (MIT).
