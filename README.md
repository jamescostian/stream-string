# stream-string

[![Build Status](https://img.shields.io/travis/jamescostian/stream-string.svg?style=flat)](https://travis-ci.org/jamescostian/stream-string)
[![Coverage Status](https://img.shields.io/coveralls/jamescostian/stream-string.svg?style=flat)](https://coveralls.io/r/jamescostian/stream-string?branch=master)
[![License](https://img.shields.io/npm/l/stream-string.svg?style=flat)](https://github.com/jamescostian/stream-string/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/stream-string.svg?style=flat)](https://www.npmjs.com/package/stream-string)
[![Downloads/Month](https://img.shields.io/npm/dm/stream-string.svg?style=flat)](https://www.npmjs.com/package/stream-string)

"Converts" a stream to a string. Promises are used by default, callbacks are allowed as well.

## Installation

Assuming you have [Node](http://nodejs.org), you can just run:

```
npm install --save stream-string
```

## Usage

### Promises

```js
const fs = require('fs')
const ss = require('stream-string')

// Make a gzip stream (just for this example)
const myStream = fs.createReadStream('./file').pipe(require('zlib').createGzip())

ss(myStream).then(data => {
  // myStream was converted to a string, and that string is stored in data
  console.log(data)
}).catch(err => {
  // myStream emitted an error event (err), so the promise from stream-string was rejected
  throw err
})
```

### Callbacks

```js
const fs = require('fs')
const ss = require('stream-string')

// Make a gzip stream (just for this example)
const myStream = fs.createReadStream('./file').pipe(require('zlib').createGzip())

ss(myStream, (err, data) => {
  if (err) {
    // myStream emitted an error event (err), which was passed to the callback
    throw err
  }
  else {
    // myStream was converted to a string, and that string is stored in data
    console.log(data)
  }
})
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first. Also, try to keep code coverage up - `npm test` will tell you the code coverage near the end of its output, not to mention the fact that it will first test your code :smiley:

## License

[ISC](LICENSE)
