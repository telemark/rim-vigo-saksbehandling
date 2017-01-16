'use strict'

const logger = require('./logger')
const getFullName = require('./get-full-name')
const datePadding = require('./date-padding')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id])
    const now = new Date()
    let archive = {}

    archive._id = document._id
    archive.date = `${datePadding(now.getDate())}.${datePadding(now.getMonth() + 1)}.${now.getFullYear()}`
    archive.year = now.getFullYear()
    archive.documentCreated = document.Dokumentelement.Dokumentdato

    archive.student = {
      id: document.Fodselsnummer,
      firstName: document.Fornavn,
      middleName: document.Mellomnavn || '',
      lastName: document.Etternavn,
      email: document.Epost,
      phone: document.Mobilnr,
      fullName: getFullName(document)
    }

    console.log(archive)

    archive.documents = [
      {
        title: '',
        offTitle: '',
        data: document.Dokumentelement.Dokumentfil,
        type: ''
      }
    ]

    document.archive = archive

    resolve(document)
  })
}
