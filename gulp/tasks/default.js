var config = require('../config');
var gulp = require('gulp');

// default task
gulp.task('default', ['sass', 'javascript:app', 'javascript:vendor', 'watch']); 
