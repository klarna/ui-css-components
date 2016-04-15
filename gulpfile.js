var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var svg2png = require('gulp-svg2png');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var addsrc = require('gulp-add-src');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var data = require('gulp-data');
var fetchDocs = require('./docs/support/fetchDocs');

// ====================================================================
// DEVELOPMENT
// ====================================================================

// browser-sync task for starting the server.
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('reload:sass', function () {
    gulp.src('src/builds/ui-toolkit.scss')
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:docs', function () {
    gulp.src('*.jade')
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(data(fetchDocs))
        .pipe(jade())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:docs:styles', function () {
    gulp.src('docs/support/*.css')
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

// Default task to be run with `gulp`
gulp.task('default', ['reload:sass', 'reload:docs', 'browser-sync', 'images'], function () {
    gulp.watch('src/**/*.scss', ['reload:sass']);
    gulp.watch(['*.jade', 'docs/**/*'], ['reload:docs']);
    gulp.watch(['support/*.css'], ['reload:docs:styles']);
    gulp.watch('src/img/*', ['images']);
});


// ====================================================================
// BUILD
// ====================================================================
gulp.task('build:sass', function () {
    gulp.src('src/builds/ui-toolkit.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build:jade', function () {
    gulp.src('*.jade')
        .pipe(data(fetchDocs))
        .pipe(jade())
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['build:sass', 'build:jade', 'images']);
