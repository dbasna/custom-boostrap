var config = require('../config');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var handleError = require('../lib/handleError')

// js config
var js = {
    in: config.config.source + config.js.in,
    out: config.config.dest + config.js.out,
    source: config.js.source,
    vendor_in: config.config.source + config.js.vendor_in,
    vendor_out: config.config.dest + config.js.vendor_out,
    vendor_source: config.js.vendor_source
};

// gulp task
gulp.task('javascript:vendor', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: js.vendor_in,
        debug: true
    });

    return b.bundle()
    .on('error', handleError)
    .pipe(source(js.vendor_source))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(js.vendor_out));
});

// gulp task
gulp.task('javascript:app', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: js.in,
        debug: true
    });

    return b.bundle()
    .on('error', handleError)
    .pipe(source(js.source))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(js.out));
});
