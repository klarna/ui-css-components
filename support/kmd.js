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

    renderer.list = function(body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return '<' + type + ' class="summary">\n' + body + '</' + type + '>\n';
    };

    renderer.code = function (code, lang, e) {
        return '<div class="example-block"><div class="example">'
            + code
            + '</div><pre><code class="'
            + this.options.langPrefix
            + escape(lang, true)
            + '">'
            + escape(code)
            + '\n</code></pre></div>\n';
    }

    renderer.codespan = function (text, lang, escaped) {
        return '<span class="code">' + text + '</span>';
    }

    module.exports = function(content) {
        return md(content, {renderer: renderer})
    }
})()
