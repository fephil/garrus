// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var del = require('del');

// Clean task
gulp.task('clean', function () {
  return del([
    config.paths.build,
    config.paths.svgicon,
  ]);
});
