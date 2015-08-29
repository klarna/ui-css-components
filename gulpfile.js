var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var svg2png = require('gulp-svg2png');
var rename = require('gulp-rename');
var RevAll = require('gulp-rev-all');
var AWS = require('gulp-awspublish');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var addsrc = require('gulp-add-src');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var data = require('gulp-data');
var fetchDocs = require('./support/fetchDocs');

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
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:docs', function() {
    gulp.src('*.jade')
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(data(fetchDocs))
        .pipe(jade())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}));
});

gulp.task('reload:html', function() {
    gulp.src('index.html')
        .pipe(reload({stream: true}));
});

gulp.task('reload:docs:styles', function() {
    gulp.src('support/*.css')
        .pipe(reload({stream: true}));
});

gulp.task('reload:js', function() {
    gulp.src('ui-toolkit.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload({stream: true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['reload:sass', 'reload:docs', 'browser-sync'], function() {
    gulp.watch('src/**/*.scss', ['reload:sass']);
    gulp.watch('builds/**/*.scss', ['reload:sass']);
    gulp.watch(['*.jade', 'docs/**/*'], ['reload:docs']);
    gulp.watch(['support/*.css'], ['reload:docs:styles']);
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

gulp.task('images:tagline', function () {
    gulp.src('img/atoms/tagline/**/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('img/atoms/tagline'));
});

gulp.task('publish', function () {
    var revAll = new RevAll();
    var awsConfig = {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: "eu-west-1",
        params: {
          Bucket: "klarna-static-assets"
        }
    };
    var publisher = AWS.create(awsConfig);
    var headers = {'Cache-Control': 'max-age=315360000, no-transform, public'};

    gulp.src(['ui-toolkit.css'])
        .pipe(minifyCss())
        .pipe(addsrc('img/**/*'))
        .pipe(revAll.revision())
        .pipe(rename(function (path) { path.dirname = 'ui-toolkit/' + path.dirname; }))
        .pipe(AWS.gzip())
        .pipe(publisher.publish(headers, {createOnly: true}))
        .pipe(publisher.cache())
        .pipe(AWS.reporter());
});

gulp.task('build', ['build:sass', 'build:jade', 'build:js']);

gulp.task('images', ['images:logos', 'images:molecules', 'images:tooltip', 'images:tagline']);
