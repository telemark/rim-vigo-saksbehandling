module.exports = {
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  CALLBACK_DIRECTORY_PATH: process.env.CALLBACK_DIRECTORY_PATH || 'test/data/callback',
  CALLBACK_API_URL: process.env.CALLBACK_API_URL || 'https://httpbin.org/anything',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/done',
  ERRORS_DIRECTORY_PATH: process.env.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  QUEUE_DIRECTORY_PATH: process.env.QUEUE_DIRECTORY_PATH || 'test/data/queue'
}
