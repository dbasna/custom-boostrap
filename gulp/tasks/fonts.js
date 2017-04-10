var config = require('../config');
var gulp = require('gulp');

// fonts config
var fonts = {
    in: [config.config.source + config.fonts.in, config.bootstrapSass.in + config.fonts.bootstrap],
    out: config.dest + config.fonts.out
};

// gulp task
gulp.task('fonts', function() {
    return gulp.src(fonts.in)
    .pipe(gulp.dest(fonts.out));
});
