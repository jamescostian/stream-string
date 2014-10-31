# Stream-String

Converts a stream to a string and supports promises.

[![build status](https://secure.travis-ci.org/jamescostian/stream-string.png)](http://travis-ci.org/jamescostian/stream-string)

# Installation
Assuming you have [Node](http://nodejs.org) and [NPM](https://npmjs.org) (which is bundled with Node), you can just run:

```
npm install --save stream-string
```

# Example

## Callbacks

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

## Promises

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
