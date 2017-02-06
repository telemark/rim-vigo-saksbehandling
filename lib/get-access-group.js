'use strict'

const schoolsInfo = require('tfk-schools-info')

module.exports = document => {
  let accessGroup = ''

  if (document.Info && document.Info !== '') {
    const schoolId = document.Info.split(';')[1]
    const schools = schoolsInfo({schoolId: schoolId})
    accessGroup = schools[0].accessGroup
  }

  return accessGroup
}
