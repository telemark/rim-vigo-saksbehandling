const uuid = require('uuid/v4')
const config = require('../config')
const pkg = require('../package.json')

module.exports = document => {
  const now = new Date()
  return {
    '_id': uuid(),
    system: pkg.name,
    jobId: document._id,
    url: config.CALLBACK_API_URL,
    method: 'PUT',
    payload: {
      studentId: document.Fodselsnummer,
      studentName: `${document.Fornavn} ${document.Etternavn}`,
      studentFirstName: document.Fornavn,
      studentMiddleName: '',
      studentLastName: document.Etternavn,
      studentUserName: document.Epost,
      studentMail: document.Epost,
      studentPhone: document.Mobilnr,
      documentDate: now,
      documentType: 'laerekontrakt',
      documentCategory: 'kontrakt-signert',
      documentStatus: [
        {
          timeStamp: now.getTime(),
          status: 'I kø'
        }
      ]
    }
  }
}
