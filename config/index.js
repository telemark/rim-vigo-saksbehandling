'use strict'

const envs = process.env

module.exports = {
  ARCHIVE_DIRECTORY_PATH: envs.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: envs.DONE_DIRECTORY_PATH || 'test/data/done',
  ERRORS_DIRECTORY_PATH: envs.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  QUEUE_DIRECTORY_PATH: envs.QUEUE_DIRECTORY_PATH || 'test/data/queue',
  fireBase: {
    apiKey: envs.FIREBASE_API_KEY || 'AIzaSyCLOgh_XMHbOymgY4qBu4Rv9-tZP6xvNAc',
    databaseURL: envs.FIREBASE_URL || 'https://seneca-firebase-test.firebaseio.com',
    authEmail: envs.FIREBASE_EMAIL || 'seneca-test@gasodden.net',
    authPassword: envs.FIREBASE_PASSWORD || 'seneca-test-password'
  }
}
