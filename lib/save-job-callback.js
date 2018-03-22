const fs = require('fs')
const generateCallback = require('./generate-callback')
const config = require('../config')
const logger = require('./logger')

module.exports = document => {
  return new Promise((resolve, reject) => {
    if (document.Dokumentelement && document.Dokumentelement.type && document.Dokumentelement.type === 'KONTRAKT') {
      logger(['save-job-callback', document._id, 'KONTRAKT', 'generate callback job'])
      const callback = generateCallback(document)
      const filePath = `${config.CALLBACK_DIRECTORY_PATH}/${callback._id}.json`
      fs.writeFile(filePath, JSON.stringify(callback, null, 2), (error) => {
        if (error) {
          logger(['save-job-callback', document._id, 'error', JSON.stringify(error)])
          reject(error)
        } else {
          const msg = `saved file: ${filePath}`
          logger(['save-job-callback', document._id, msg])
          resolve(document)
        }
      })
    } else {
      logger(['save-job-callback', document._id, 'not a KONTRAKT'])
      resolve(document)
    }
  })
}
