'use strict';
var noop = function () {}

var streamToString = function (stream, callback) {
	var string = ''
	stream.on('data', function (data) {
		string += data.toString()
	})
	stream.on('end', function () {
		callback && callback(null, string)
	})
	stream.on('error', callback ? callback : noop)
}

module.exports = require('bluebird').promisify(streamToString)
