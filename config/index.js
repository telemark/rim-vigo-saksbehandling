'use strict'

const envs = process.env

module.exports = {
  ARCHIVE_DIRECTORY_PATH: envs.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: envs.DONE_DIRECTORY_PATH || 'test/data/done',
  ERRORS_DIRECTORY_PATH: envs.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  QUEUE_DIRECTORY_PATH: envs.QUEUE_DIRECTORY_PATH || 'test/data/queue'
}
