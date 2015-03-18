var test = require('tape')
var fs = require('fs')

var converter = require('../index.js')

// List of files to be tested
var files = ['./.jshintrc', './.gitignore']
// .jshintrc is ~1K, .gitignore is super tiny

test('promises', function (t) {
	t.plan(2)

	files.forEach(function (file) {
		converter(fs.createReadStream(file)).then(function (data) {
			t.equal(data, fs.readFileSync(file).toString(), 'the stream and the actual string match (' + file + ')')
		}).error(function (err) {
			t.fail(err)
		})
	})
})
test('callbacks', function (t) {
	t.plan(2)

	files.forEach(function (file) {
		converter(fs.createReadStream(file), function (err, data) {
			if (err) {
				t.fail(err)
			}
			else {
				t.equal(data, fs.readFileSync(file).toString(), 'the stream and the actual string match (' + file + ')')
			}
		})
	})
})
