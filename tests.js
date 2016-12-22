const {createReadStream, readFileSync} = require('fs')
const ss = require('./index.js')

// List of files to be tested
const files = ['./CONTRIBUTING.md', './.gitignore']

describe('using the module with promises', () => {
  files.forEach(file => {
    it('works with ' + file, () =>
      ss(createReadStream(file)).then(data => {
        expect(data).toBe(readFileSync(file).toString())
      })
    )
  })
  it('provides an error when the file can\'t be read', () =>
    ss(createReadStream('./not-a-file-in-here'))
      .then(
        () => Promise.reject('uh-oh!'), // If the library resolves this promise, then the library is wrong
        () => expect(true).toBe(true) // If the library rejects this promise, it's all good :)
      )
  )
})
describe('using the module with callbacks', () => {
  files.forEach(file => {
    it('works with ' + file, () => new Promise((resolve, reject) => {
      ss(createReadStream(file), (err, data) => {
        if (err) {
          reject(err)
        } else {
          expect(data).toBe(readFileSync(file).toString())
          resolve()
        }
      })
    }))
  })
  it('provides an error when the file can\'t be read', () => new Promise((resolve, reject) =>
    ss(createReadStream('./not-a-file-in-here'), err => {
      expect(err).toBeTruthy()
      resolve()
    })
  ))
})
