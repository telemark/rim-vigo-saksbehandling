'use strict'

const getSkoleAar = require('get-skole-aar')
const logger = require('./logger')
const getFullName = require('./get-full-name')
const datePadding = require('./date-padding')
const archiveTemplates = require('../config/archive-templates.json')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id])
    const now = new Date()
    const then = new Date(document.Dokumentelement.Dokumentdato)
    const template = archiveTemplates['soknadInn']
    const title = `${template.Title} ${template.SchoolYear ? getSkoleAar() : now.getFullYear()}`
    let archive = {}

    archive._id = document._id
    archive.title = title
    archive.date = `${datePadding(now.getDate())}.${datePadding(now.getMonth() + 1)}.${now.getFullYear()}`
    archive.year = now.getFullYear()
    archive.documentCreated = `${datePadding(then.getDate())}.${datePadding(then.getMonth() + 1)}.${then.getFullYear()}`
    archive.category = 'elevmappe'
    archive.AccessCode = template.AccessCode
    archive.Paragraph = template.Paragraph
    archive.AccessGroup = template.AccessGroup

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
        title: title,
        offTitle: title,
        data: document.Dokumentelement.Dokumentfil,
        type: '',
        role: ''
      }
    ]

    document.archive = archive

    resolve(document)
  })
}
