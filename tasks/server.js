// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
var browserSync = require('browser-sync').create();

// Browsersync task
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: config.paths.build,
      notify: false
    }
  });
});
