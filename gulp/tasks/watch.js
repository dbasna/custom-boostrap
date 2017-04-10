var config = require('../config');
var gulp = require('gulp');

// watch config
var watch = {
    js: config.config.source + config.js.watch,
    scss: config.config.source + config.scss.watch
};

// gulp task
gulp.task('watch', function() { 
    gulp.watch(watch.js, ['javascript:app', 'javascript:vendor']);
    gulp.watch(watch.scss, ['sass']);
});
