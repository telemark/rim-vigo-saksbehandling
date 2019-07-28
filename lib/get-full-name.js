'use strict'

module.exports = (document) => {
  const names = []
  names.push(document.Fornavn)

  if (document.Mellomnavn) {
    names.push(document.Mellomnavn)
  }

  names.push(document.Etternavn)

  return names.join(' ')
}
