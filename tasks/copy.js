// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
// ...

// Copy task
gulp.task('copy', function () {
  return gulp.src(config.paths.files + '**/*', {})
  .pipe(gulpif(options.debug === true, debug({title: 'Files Copied:'})))
  .pipe(gulp.dest(config.paths.build));
});
