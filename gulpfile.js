// Load gulp and global config
var gulp          = require('gulp');
var config        = require('./config.json');
var minimist      = require('minimist');
var gulpif        = require('gulp-if');

// Get command line options we want to use
var knownOptions = {
  string: 'env',
  default: { env: 'dev' }
};

var options = minimist(process.argv.slice(2), knownOptions);

// Load modules to run tasks from files
var requireDir    = require('require-dir');
var tasks         = requireDir('./tasks');
var runSequence   = require('run-sequence');

// Build with developer assets, run server with live reloading
gulp.task('default', function(callback) {
  runSequence(
              'clean',
              ['css'],
              'server',
              callback
            );
});

// Build website, either with dev assets depending on flag
gulp.task('build', function(callback) {
  runSequence(
              'clean',
              ['css'],
              callback
            );
});
