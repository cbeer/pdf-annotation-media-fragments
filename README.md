# PDF.js, Annotations, and Media Fragments

This is a proof-of-concept integration of [PDF.js](https://github.com/mozilla/pdf.js), the [OKNF Annotator](https://github.com/okfn/annotator) widget, and a [Media Fragments](https://www.w3.org/TR/media-frags/)-based audio player for rich media annotations within a PDF.

## Getting started

* Install [bower](http://bower.io/#installing-bower)
* Create an account at [annotateit.org](http://annotateit.org) to persist annotations
* Clone this repository
* Run `bower install`
* Put this repository in a web-accessible location (using e.g. `python -m SimpleHTTPServer`, `grunt connect`, etc)
* Add a PDF document into this directory
* Load e.g. `http://localhost:8000/index.html?file=relative/path/to/path-to-my.pdf` in your web browser and get annotating

## Screenshot
![screen shot 2014-06-01 at 21 48 57](https://cloud.githubusercontent.com/assets/111218/3143967/db6cf482-ea11-11e3-8404-c5c78ea4efce.png)



