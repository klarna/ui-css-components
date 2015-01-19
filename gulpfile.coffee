gulp        = require 'gulp'
browserSync = require 'browser-sync'
reload      = browserSync.reload
sass        = require 'gulp-sass'
jade        = require 'gulp-jade'
jshint      = require 'gulp-jshint'


# browser-sync task for starting the server.
gulp.task 'browser-sync', ->
  browserSync
    server:
      baseDir: './'


# Sass task, will run when any SCSS files change & BrowserSync
# will auto-update browsers
gulp.task 'reload:sass', ->
  gulp.src 'builds/ui-toolkit.scss'
    .pipe sass()
    .pipe gulp.dest('./')
    .pipe reload({stream:true})


gulp.task 'reload:jade', ->
  gulp.src '*.jade'
    .pipe jade()
    .pipe gulp.dest('./')
    .pipe reload({stream: true})


gulp.task 'reload:html', ->
  gulp.src 'index.html'
    .pipe reload({stream: true})


gulp.task 'reload:js', ->
  gulp.src '*.js'
    .pipe jshint()
    .pipe jshint.reporter('default')
    .pipe reload({stream: true})



# Default task to be run with `gulp`
gulp.task 'default', ['reload:sass', 'reload:jade', 'browser-sync'], ->
  gulp.watch 'src/**/*.scss', ['reload:sass']
  gulp.watch 'builds/**/*.scss', ['reload:sass']
  gulp.watch '*.jade', ['reload:jade']
  gulp.watch 'snippets/*.html', ['reload:jade']
  gulp.watch '*.js', ['reload:js']
  gulp.watch 'index.html', ['reload:html']
