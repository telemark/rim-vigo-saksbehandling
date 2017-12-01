'use strict'

const getNextJobFromQueue = require('./lib/get-next-job-from-queue')
const getFileData = require('./lib/get-file-data')
const formatDocument = require('./lib/format-document')
const saveJobDone = require('./lib/save-job-done')
const saveJobArchive = require('./lib/save-job-archive')
const deleteJobFromQueue = require('./lib/delete-job-from-queue')
const logger = require('./lib/logger')

getNextJobFromQueue()
  .then(getFileData)
  .then(formatDocument)
  .then(saveJobArchive)
  .then(saveJobDone)
  .then(deleteJobFromQueue)
  .then((data) => {
    logger('finished')
  })
  .catch((error) => {
    logger(['error', JSON.stringify(error)])
    process.exit(1)
  })
