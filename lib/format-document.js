'use strict'

const logger = require('./logger')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id])
    resolve(document)
  })
}
