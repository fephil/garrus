// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('./config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Load modules to run tasks from files
var requireDir   = require('require-dir');
var tasks        = requireDir('./tasks');
var runSequence  = require('run-sequence');

// Build website with development assets and run server with live reloading
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'metalsmith',
    ['svgicon', 'css', 'webpack', 'img', 'copy', 'html'],
    'server',
    callback
  );
});

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', function(callback) {
  runSequence(
    'clean',
    'metalsmith',
    ['svgicon', 'css', 'webpack', 'img', 'copy', 'html'],
    callback
  );
});
