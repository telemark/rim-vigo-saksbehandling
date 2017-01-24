'use strict'

const fs = require('fs')
const fbs = require('firebase-save')
const config = require('../config')
const logger = require('./logger')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  return new Promise((resolve, reject) => {
    const database = fbs(config.fireBase)
    const data = {
      key: 'rim-vigo-saksbehandling',
      value: {
        archive: fs.readdirSync(config.ARCHIVE_DIRECTORY_PATH).filter(isJson).length,
        error: fs.readdirSync(config.ERRORS_DIRECTORY_PATH).filter(isJson).length,
        done: fs.readdirSync(config.DONE_DIRECTORY_PATH).filter(isJson).length,
        queue: fs.readdirSync(config.QUEUE_DIRECTORY_PATH).filter(isJson).length
      }
    }
    database.save(data)
      .then((result) => {
        logger(['update-status', 'status saved', JSON.stringify(result)])
        resolve(result)
      }).catch((error) => {
        logger(['update-status', 'error', JSON.stringify(error)])
        reject(error)
      })
  })
}