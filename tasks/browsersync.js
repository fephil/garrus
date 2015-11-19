// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var browserSync = require('browser-sync').create();

// Browsersync task
gulp.task('browsersync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: config.paths.build,
    }
  });
});
