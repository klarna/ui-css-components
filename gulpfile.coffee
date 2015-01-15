gulp        = require 'gulp'
browserSync = require 'browser-sync'
reload      = browserSync.reload
sass        = require 'gulp-sass'
jade        = require 'gulp-jade'


# browser-sync task for starting the server.
gulp.task 'browser-sync', ->
  browserSync
    server:
      baseDir: './'


# Sass task, will run when any SCSS files change & BrowserSync
# will auto-update browsers
gulp.task 'sass', ->
  gulp.src 'builds/ui-toolkit.scss'
    .pipe sass()
    .pipe gulp.dest('./')
    .pipe reload({stream:true})


gulp.task 'jade', ->
  gulp.src '*.jade'
    .pipe jade()
    .pipe gulp.dest('./')
    .pipe reload({stream: true})


gulp.task 'reload:html', ->
  gulp.src 'index.html'
    .pipe reload({stream: true})


gulp.task 'reload:js', ->
  gulp.src '*.js'
    .pipe reload({stream: true})



# Default task to be run with `gulp`
gulp.task 'default', ['sass', 'jade', 'browser-sync'], ->
  gulp.watch 'src/**/*.scss', ['sass']
  gulp.watch 'builds/**/*.scss', ['sass']
  gulp.watch '*.jade', ['jade']
  gulp.watch 'snippets/*.html', ['jade']
  gulp.watch '*.js', ['reload:js']
  gulp.watch 'index.html', ['reload:html']
