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

function escape (html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const headingLevelClass = {
  '1': 'cui__title--primary',
  '2': 'cui__title--secondary',
  '3': 'cui__subtitle'
}

renderer.heading = (text, level) => (
  `<h${level} class="${headingLevelClass[level]}">${text}</h${level}>\n`
)

renderer.paragraph = (text) => (
  text.match(/<a name/)
    ? text
    : `<p class="cui__paragraph--primary">${text}</p>\n`
)

renderer.list = (body, ordered) => {
  const type = ordered ? 'ol' : 'ul'
  return `<${type} class="summary">\n${body}</${type}>\n`
}

renderer.code = function (code, lang, escaped) {
  if (!lang) {
    return `<pre><code>${escaped ? code : escape(code, true)}\n</code></pre>`
  }

  return `
    <div class="example-block">
      <div class="example">${code}</div>
      <pre><code class="${this.options.langPrefix}${escape(lang, true)}"><div>${escape(code)}</div></code></pre>
    </div>`
}

renderer.codespan = (text, lang, escaped) => (
  `<span class="code">${text}</span>`
)

renderer.link = (href, title, text) => (
  `<a class="cui__link" href="${href}">${text}</a>`
)

module.exports = (content) => md(content, { renderer })
