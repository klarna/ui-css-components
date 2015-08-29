/*
 * fetchDocs
 *
 * Fetches all documentation (markdown files) inside docs,
 * parse them, and returns a list for the index template.
 *
 */

(function() {
    var fs = require('fs');
    var Glob = require('glob').Glob;
    var path = require('path');
    var kmd = require('./kmd');

    module.exports = function fetchDocs() {

        var docFiles = new Glob("docs/**/*.md", {sync: true})

        var docs = docFiles.found.map(function(file){
            var content = fs.readFileSync(file, {encoding: 'utf8'})

            return {
              name: path.basename(file, '.md'),
              parsedContent: kmd(content)
            }
        })

        return {docs: docs};
    }
})()
