var test = require('tape')
var fs = require('fs')

var converter = require('../index.js')

// List of files to be tested
var files = ['./CONTRIBUTING.md', './.gitignore']

test('promises', t => {
  t.plan(2)

  files.forEach(file => {
    converter(fs.createReadStream(file)).then(data => {
      t.equal(data, fs.readFileSync(file).toString(), 'the stream and the actual string match (' + file + ')')
    }).catch(err => t.fail(err))
  })
})
test('callbacks', function (t) {
  t.plan(2)

  files.forEach(file => {
    converter(fs.createReadStream(file), (err, data) => {
      if (err) {
        t.fail(err)
      } else {
        t.equal(data, fs.readFileSync(file).toString(), 'the stream and the actual string match (' + file + ')')
      }
    })
  })
})
