'use strict'

const getSkoleAar = require('get-skole-aar')
const logger = require('./logger')
const getFullName = require('./get-full-name')
const datePadding = require('./date-padding')
const archiveTemplates = require('../config/archive-templates.json')
const sanitize = require('sanitize-filename')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    logger(['format-document', document._id, 'starts'])
    const now = new Date()
    const then = new Date(document.Dokumentelement.Dokumentdato)
    const schoolYearDate = `${now.getFullYear()}-08-15`
    const documentType = document.Dokumentelement.Dokumenttype
    const template = archiveTemplates[documentType]
    const title = `${template.Title} ${template.SchoolYear ? getSkoleAar(schoolYearDate) : now.getFullYear()}`
    const fullName = getFullName(document)
    let archive = {}

    archive._id = document._id
    archive.date = `${datePadding(now.getDate())}.${datePadding(now.getMonth() + 1)}.${now.getFullYear()}`
    archive.refererSystem = document.FagsystemNavn
    archive.refererDocumentId = document.Dokumentelement.DokumentId

    archive.case = {
      generator: 'elevmappe-add-case',
      title: 'Elevmappe',
      unofficialTitle: `Elevmappe - ${fullName}`,
      type: 'elevmappe',
      accessCode: template.AccessCode,
      accessGroup: template.AccessGroup,
      status: 'B',
      paragraph: template.Paragraph,
      subArchive: 'Elev',
      responsibleEnterpriseRecno: '506',
      responsiblePersonRecno: '200333'
    }

    const documents = [
      {
        generator: 'add-documents',
        title: title,
        unofficialTitle: `${title} - ${fullName}`,
        accessCode: template.AccessCode,
        accessGroup: template.AccessGroup,
        signOff: template.signOff,
        documentCreated: `${datePadding(then.getDate())}.${datePadding(then.getMonth() + 1)}.${then.getFullYear()}`,
        category: template.Category,
        paragraph: template.Paragraph,
        archive: 'Saksdokument',
        status: template.Status,
        responsibleEnterpriseRecno: '506',
        responsiblePersonRecno: '200333',
        contacts: [
          {
            ReferenceNumber: document.Fodselsnummer,
            Role: template.Category === 'Dokument inn' ? 'Avsender' : 'Mottaker'
          }
        ],
        file: {
          title: sanitize(`${title}.PDF`),
          file: document.Dokumentelement.Dokumentfil
        }
      }
    ]

    archive.documents = template.includeDocuments ? documents : false

    archive.contacts = [
      {
        generator: 'add-private-person',
        personalIdNumber: document.Fodselsnummer,
        firstName: document.Fornavn,
        middleName: document.Mellomnavn || '',
        lastName: document.Etternavn,
        fullName: getFullName(document),
        email: document.Epost || '',
        phone: document.Mobilnr || '',
        streetAddress: document.FolkeRegisterAdresse.Adresselinje1 || '',
        zipCode: document.FolkeRegisterAdresse.Postnummmer,
        zipPlace: document.FolkeRegisterAdresse.Poststed,
        area: 'Telemark',
        caseContact: 'Sakspart'
      }
    ]

    archive.callbackData = {
      _id: document._id,
      fagsystemNavn: 'Public360',
      dokumentId: document.Dokumentelement.DokumentId,
      fodselsnummer: document.Fodselsnummer,
      arkiveringUtfort: true
    }

    document.archive = archive

    logger(['format-document', document._id, 'finished'])
    resolve(document)
  })
}
