var test = require('tape')
var fs = require('fs')

var converter = require('../index.js')

test('promises', function (t) {
	t.plan(1)
	converter(fs.createReadStream('./.jshintrc')).then(function (data) {
		t.equal(data, fs.readFileSync('./.jshintrc').toString(), 'the stream and the actual string match')
	}).error(function (err) {
		t.fail(err)
	})
})
test('callbacks', function (t) {
	t.plan(1)
	converter(fs.createReadStream('./.jshintrc'), function (err, data) {
		if (err) {
			t.fail(err)
		}
		else {
			t.equal(data, fs.readFileSync('./.jshintrc').toString(), 'the stream and the actual string match')
		}
	})
})
