var assert = require('assert')
var util = require('util')
var fs = require('fs')

var converter = require('../index.js')

describe('converter', function () {
	it('should work if promises are used', function (done) {
		converter(fs.createReadStream('./.jshintrc')).then(function (data) {
			assert.equal(data, fs.readFileSync('./.jshintrc').toString(), 'the stream and the actual string matched')
			done()
		}).error(function (err) {
			assert(false, 'ERROR!')
			throw err
			done()
		})
	})
	it('should work if callbacks are used', function (done) {
		converter(fs.createReadStream('./.jshintrc'), function (err, data) {
			if (err) {
				assert(false, 'ERROR!')
				throw err
			}
			else {
				assert.equal(data, fs.readFileSync('./.jshintrc').toString(), 'the stream and the actual string matched')
			}
			done()
		})
	})
})
