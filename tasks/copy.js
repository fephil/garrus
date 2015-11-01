// Load gulp and global config
var gulp      = require('gulp');
var config    = require('../config.json');
var minimist  = require('minimist');
var gulpif    = require('gulp-if');

// Get command line options we want to use
var knownOptions = {
  string: 'env',
  default: { env: 'dev' }
};

var options = minimist(process.argv.slice(2), knownOptions);

// Specific task modules
// ...

// Copy task
gulp.task('copy', function () {
  return gulp.src([config.paths.files + '**/*', 'src/test2/**/*'], {})
  .pipe(gulp.dest(config.paths.build));
});
