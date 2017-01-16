'use strict'

const config = require('../config')
const logger = require('./logger')

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    const data = require(`../${config.QUEUE_DIRECTORY_PATH}/${file}`)
    if (data) {
      logger(['get-file-data', data._id, 'data found'])
      resolve(data)
    } else {
      logger(['get-file-data', 'error', 'File not found'])
      reject(new Error('File not found'))
    }
  })
}
