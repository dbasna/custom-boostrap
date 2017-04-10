var config = require('../config');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// scss config
var scss = {
    in: config.config.source + config.scss.in,
    out: config.config.dest + config.scss.out,
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [config.bootstrapSass.in + 'assets/stylesheets']
    }
};

// gulp task
gulp.task('sass', function() {
    gulp.src(scss.in)
    .pipe(sass(scss.sassOpts))
    .pipe(autoprefixer())
    .pipe(gulp.dest(scss.out));
});
