/*
 * Klarna flavoured markdown
 *
 * Basically, just a wrapper around marked.
 * It adds some classes to allow proper styling and wraps code
 * in example blocks.
 *
 */

const md = require('marked')
const renderer = new md.Renderer()

renderer.heading = (text, level) => ''

renderer.paragraph = (text) => ''

renderer.list = (body, ordered) => ''

renderer.code = (code, lang, escaped) => (
    lang === 'html'
      ? `<div class="example">${code}</div>`
      : ''
)

renderer.codespan = (text, lang, escaped) => ' '

renderer.link = (href, title, text) => ' '

module.exports = (content) => md(content, { renderer })
