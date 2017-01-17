'use strict'

const logger = require('./logger')
const getFullName = require('./get-full-name')
const datePadding = require('./date-padding')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id])
    const now = new Date()
    const then = new Date(document.Dokumentelement.Dokumentdato)
    let archive = {}

    archive._id = document._id
    archive.title = ''
    archive.date = `${datePadding(now.getDate())}.${datePadding(now.getMonth() + 1)}.${now.getFullYear()}`
    archive.year = now.getFullYear()
    archive.documentCreated = `${datePadding(then.getDate())}.${datePadding(then.getMonth() + 1)}.${then.getFullYear()}`
    archive.category = 'elevmappe'

    archive.privatePerson = {
      personalIdNumber: document.Fodselsnummer,
      firstName: document.Fornavn,
      middleName: document.Mellomnavn || '',
      lastName: document.Etternavn,
      email: document.Epost,
      phone: document.Mobilnr,
      fullName: getFullName(document),
      address: document.FolkeRegisterAdresse.Adresselinje1 || '',
      zip: document.FolkeRegisterAdresse.Postnummmer,
      city: document.FolkeRegisterAdresse.Poststed
    }

    archive.documents = [
      {
        title: '',
        offTitle: '',
        data: document.Dokumentelement.Dokumentfil,
        type: '',
        role: ''
      }
    ]

    document.archive = archive

    resolve(document)
  })
}
