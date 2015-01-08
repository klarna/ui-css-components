var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
  gulp.src('src/toolkit.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream:true}));

  gulp.src('support/dev.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("src/*.scss", ['sass']);
});
