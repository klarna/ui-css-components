/*
 * fetchDocs
 *
 * Fetches all documentation (markdown files) inside docs,
 * parse them, and returns a list for the index template.
 *
 */

const fs = require('fs')
const kmd = require('./kmd')

const docFiles = [
  'Getting started',
  'Baseline',
  'Block',
  'Button',
  'Dropdown',
  'Field',
  'Label',
  'Loader',
  'Navigation',
  'Preview',
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
