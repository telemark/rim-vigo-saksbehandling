'use strict'

const getSkoleAar = require('get-skole-aar')
const logger = require('./logger')
const getFullName = require('./get-full-name')
const datePadding = require('./date-padding')
const archiveTemplates = require('../config/archive-templates.json')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id, 'starts'])
    const now = new Date()
    const then = new Date(document.Dokumentelement.Dokumentdato)
    const schoolYearDate = `${now.getFullYear()}-08-15`
    const documentType = document.Dokumentelement.Dokumenttype
    const template = archiveTemplates[documentType]
    const title = `${template.Title} ${template.SchoolYear ? getSkoleAar(schoolYearDate) : now.getFullYear()}`
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
    archive.School = document.Skole
    archive.NoarkClassificationCode = template.NoarkClassificationCode

    archive.contacts = [
      {
        generator: 'add-private-person',
        personalIdNumber: document.Fodselsnummer,
        firstName: document.Fornavn,
        middleName: document.Mellomnavn || '',
        lastName: document.Etternavn,
        email: document.Epost || '',
        phone: document.Mobilnr || '',
        fullName: getFullName(document),
        streetAddress: document.FolkeRegisterAdresse.Adresselinje1 || '',
        zipCode: document.FolkeRegisterAdresse.Postnummmer,
        zipPlace: document.FolkeRegisterAdresse.Poststed,
        area: 'Telemark'
      }
    ]

    archive.documents = [
      {
        id: document.Dokumentelement.DokumentId,
        title: title,
        offTitle: title,
        data: document.Dokumentelement.Dokumentfil,
        type: template.Category,
        role: ''
      }
    ]

    document.archive = archive

    logger(['format-document', document._id, 'finished'])
    resolve(document)
  })
}
