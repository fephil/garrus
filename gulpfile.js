// Load global config and gulp
var config  = require(__dirname + '/tasks/config/foley.json');
var argv    = require('yargs').argv;
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var debug   = require('gulp-debug');
var gulpif  = require('gulp-if');

// Load modules to run tasks from files
var requireDir   = require('require-dir');
var tasks        = requireDir(__dirname + '/tasks');
var runSequence  = require('run-sequence');

// Specific task modules
var browserSync = require('browser-sync');
var watch       = require('gulp-watch');

// BrowserSync reload task
gulp.task('reload', function(callback) {
  browserSync.reload();
  callback();
});

// Assets task. Metalsmith needs to run first
gulp.task('assets', function(callback) {
  runSequence(
    'metalsmith',
    ['svgicon', 'scss', 'webpack', 'img', 'copy', 'html'],
    'reload',
    callback
  );
});

// Rebuild JS task.
// We need to manually reload BrowserSync after
gulp.task('rebuildjs', function(callback) {
  runSequence(
    'webpack',
    'reload',
    callback
  );
});

// Watch task
gulp.task('watch', function(callback) {
  gulp.watch(config.paths.scss + '**/*.scss', ['scss']);
  gulp.watch(config.paths.js + '**/*.js', ['rebuildjs']);
  gulp.watch(config.paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img']);
  gulp.watch(config.paths.icons + '**/*.svg', ['svgicon']);
  gulp.watch([config.paths.pages + '**/*.hbs', config.paths.partials + '**/*.hbs'], ['assets']);
});

// Build website with development assets and run server with live reloading
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'assets',
    'browsersync',
    'watch',
    callback
  );
});

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', function(callback) {
  runSequence(
    'clean',
    'assets',
    'crticalcss',
    callback
  );
});

// Run the audit task to check the code
gulp.task('auditcode', function(callback) {
  runSequence(
    'scsslint',
    'jslint',
    callback
  );
});

// Run the audit task to check the built website
// NOTE: Not used yet
gulp.task('auditsite', function(callback) {
  runSequence(
    'deploy',
    callback
  );
});
