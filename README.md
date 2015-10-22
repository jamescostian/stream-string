# stream-string

[![Build Status](https://img.shields.io/travis/jamescostian/stream-string.svg?style=flat)](https://travis-ci.org/jamescostian/stream-string)
[![Coverage Status](https://img.shields.io/coveralls/jamescostian/stream-string.svg?style=flat)](https://coveralls.io/r/jamescostian/stream-string?branch=master)
[![Dependency Status](https://img.shields.io/gemnasium/jamescostian/stream-string.svg?style=flat)](https://gemnasium.com/jamescostian/stream-string)
[![License](https://img.shields.io/npm/l/stream-string.svg?style=flat)](https://github.com/jamescostian/stream-string/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/stream-string.svg?style=flat)](https://www.npmjs.com/package/stream-string)
[![Downloads/Month](https://img.shields.io/npm/dm/stream-string.svg?style=flat)](https://www.npmjs.com/package/stream-string)

Converts a stream to a string and supports promises.

# Installation

Assuming you have [Node](http://nodejs.org) or [io.js](http://iojs.org), you can just run:

```
npm install --save stream-string
```

# Examples

## Using Callbacks

```js
var fs = require('fs')
var ss = require('stream-string')

// Make a gzip stream (just for this example)
var myStream = fs.createReadStream('./file').pipe(require('zlib').createGzip())

ss(myStream, function (err, data) {
    if (err) {
        // Stream threw an error event
        throw err
    }
    else {
        // myStream was converted to a string, and that string is stored in data
        console.log(data)
    }
})
```

## Using Promises

```js
var fs = require('fs')
var ss = require('stream-string')

// Make a gzip stream (just for this example)
var myStream = fs.createReadStream('./file').pipe(require('zlib').createGzip())

ss(myStream).then(function (data) {
    // myStream was converted to a string, and that string is stored in data
    console.log(data)
}).error(function (err) {
    // Stream threw an error event
    throw err
})
```

# Development

+ Fork this project, make a branch from `master`, work in that branch, and then submit a pull request
+ This project has always had 100% code coverage - please write tests that thoroughly test every line of code you add
+ TAPE tests are in the `test` directory. You can run them with `npm test` or `make test`.
+ To see the code coverage, run `make cov`
+ If you make a change, mention it in the CHANGELOG. [Here](http://keepachangelog.com/) is a style guide reference
