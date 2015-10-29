// Load modules
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Config
// TBA
var buildFolder = '_dist/';

// Browsersync
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: buildFolder
    }
  });
});

// Extra tasks TBA
gulp.task('default', ['server']);
