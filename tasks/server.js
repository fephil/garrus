// Load gulp and global config
var gulp          = require('gulp');
var config        = require('../config.json');
var minimist      = require('minimist');
var gulpif        = require('gulp-if');

// Specific task modules
var browserSync   = require('browser-sync').create();

// Browsersync
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: config.paths.build
    }
  });
});
