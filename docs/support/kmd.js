/*
 * Klarna flavoured markdown
 *
 * Basically, just a wrapper around marked.
 * It adds some classes to allow proper styling and wraps code
 * in example blocks.
 *
 */

(function() {
    var md = require('marked');
    var renderer = new md.Renderer();

    function escape(html, encode) {
        return html
            .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    headingLevelClass = function(level) {
      switch(level) {
        case 1: return 'cui__title--primary';
        case 2: return 'cui__title--secondary';
        case 3: return 'cui__subtitle';
      }
    }

    renderer.heading = function(text, level) {
      return '<h' + level + ' class="' + headingLevelClass(level) + '">'
        + text
        + '</h' + level+ '>\n';
    };

    renderer.paragraph = function(text) {
      if(text.match(/<a name/)) return text
      return '<p class="cui__paragraph--primary">' + text + '</p>\n';
    };

    renderer.list = function(body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return '<' + type + ' class="summary">\n' + body + '</' + type + '>\n';
    };

    renderer.code = function (code, lang, escaped) {
        if (!lang) {
            return '<pre><code>'
                + (escaped ? code : escape(code, true))
                + '\n</code></pre>';
        }

        return '<div class="example-block"><div class="example">'
            + code
            + '</div><pre><code class="'
            + this.options.langPrefix
            + escape(lang, true)
            + '"><div>'
            + escape(code)
            + '\n</div></code></pre></div>\n';
    }

    renderer.codespan = function (text, lang, escaped) {
        return '<span class="code">' + text + '</span>';
    }

    renderer.link = function (href, title, text) {
        return '<a class="cui__link" href="' + href + '">' + text + '</a>';
    }

    module.exports = function(content) {
        return md(content, {renderer: renderer})
    }
})()
