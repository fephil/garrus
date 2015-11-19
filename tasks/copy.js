// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
// ...

// Copy task
gulp.task('copy', function () {
  return gulp.src(config.paths.files + '**/*', {})
  .pipe(gulpif(argv.debug === true, debug({title: 'Files Copied:'})))
  .pipe(gulp.dest(config.paths.build));
});
