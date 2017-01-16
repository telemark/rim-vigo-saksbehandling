'use strict'

const envs = process.env

module.exports = {
  QUEUE_DIRECTORY_PATH: envs.QUEUE_DIRECTORY_PATH || 'test/data/queue',
  JOBS_DIRECTORY_PATH: envs.JOBS_DIRECTORY_PATH || 'test/data/jobs',
  ERRORS_DIRECTORY_PATH: envs.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  DONE_DIRECTORY_PATH: envs.DONE_DIRECTORY_PATH || 'test/data/done',
  URL: envs.URL || 'https://vigo.dummy.allthethings.win',
  USERNAME: envs.USERNAME || 'my-username',
  PASSWORD: envs.PASSWORD || 'my-password'
}
