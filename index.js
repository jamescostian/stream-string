'use strict'

var streamToString = function (stream, callback) {
  var string = ''
  stream.on('data', function (data) {
    string += data.toString()
  })
  stream.on('end', function () {
    callback && callback(null, string)
  })
  stream.on('error', callback)
}

module.exports = require('bluebird').promisify(streamToString)
