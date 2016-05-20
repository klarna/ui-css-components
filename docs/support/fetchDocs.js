/*
 * fetchDocs
 *
 * Fetches all documentation (markdown files) inside docs,
 * parse them, and returns a list for the index template.
 *
 */

const fs = require('fs')
const kmd = require('./kmd')
const plainReporter = require('./plainReporter')

const docFiles = [
  'Getting started',
  'Baseline',
  'Block',
  'Button',
  'Checklist',
  'Dialog',
  'Dropdown',
  'Field',
  'Illustration',
  'Input',
  'Label',
  'Loader',
  'Navigation',
  'Preview',
  'Selector',
  'Switch',
  'Text',
  'Tooltip'
]

module.exports = function fetchDocs () {
  const docs = docFiles.map((name) => {
    const parsedContent = kmd(fs.readFileSync(`docs/${name}.md`, { encoding: 'utf8' }))

    return { name, parsedContent }
  })

  return { docs }
}

module.exports.altDocs = function () {
    const docs = docFiles.map((name) => {
        const parsedContent = plainReporter(fs.readFileSync(`docs/${name}.md`, { encoding: 'utf8' }))

        return { name, parsedContent }
    })

    return { docs }
}
