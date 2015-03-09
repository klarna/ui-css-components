var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var svg2png = require('gulp-svg2png');
var rename = require('gulp-rename');

// ====================================================================
// DEVELOPMENT
// ====================================================================

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('reload:sass', function() {
    gulp.src('builds/ui-toolkit.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:jade', function() {
    gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:html', function() {
    gulp.src('index.html')
        .pipe(reload({stream: true}));
});

gulp.task('reload:js', function() {
    gulp.src('ui-toolkit.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload({stream: true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['reload:sass', 'reload:jade', 'browser-sync'], function() {
    gulp.watch('src/**/*.scss', ['reload:sass']);
    gulp.watch('builds/**/*.scss', ['reload:sass']);
    gulp.watch('*.jade', ['reload:jade']);
    gulp.watch('snippets/*.html', ['reload:jade']);
    gulp.watch('ui-toolkit.js', ['reload:js']);
    gulp.watch('index.html', ['reload:html']);
});


// ====================================================================
// BUILD
// ====================================================================
gulp.task('build:sass', function() {
    gulp.src('builds/ui-toolkit.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'));
});

gulp.task('build:jade', function() {
    gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'));
});

gulp.task('build:js', function() {
    gulp.src('ui-toolkit.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('images:logos', function () {
    gulp.src('img/atoms/logos/svg/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('img/atoms/logos/png/22px-height'));
});

gulp.task('images:molecules', function () {
    gulp.src('img/molecules/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('img/molecules'));
});

gulp.task('images:tooltip', function () {
    gulp.src('img/atoms/tooltip/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('img/atoms/tooltip'));
});

gulp.task('build', ['build:sass', 'build:jade', 'build:js']);

gulp.task('images', ['images:logos', 'images:molecules', 'images:tooltip']);
