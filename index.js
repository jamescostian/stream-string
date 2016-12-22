'use strict'

module.exports = (stream, callback) => {
  const promise = new Promise((resolve, reject) => {
    let string = ''
    stream.on('data', data => {
      string += data.toString()
    })
    stream.on('end', () => resolve(string))
    stream.on('error', reject)
  })
  if (typeof callback === 'undefined') {
    return promise
  } else {
    promise.then(result => callback(null, result), err => callback(err))
  }
}
