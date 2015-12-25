// Load global config and gulp
const config = require(__dirname + '/foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Load modules to run tasks from files
const requireDir = require('require-dir')
const tasks = requireDir(__dirname + '/tasks') // eslint-disable-line
const runSequence = require('run-sequence')

// Specific task modules
const browserSync = require('browser-sync')

// Public facing tasks
// ---

// Build website with development assets and run server with live reloading
gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'assets',
    'browsersync',
    'watch',
    callback
  )
})

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', function (callback) {
  runSequence(
    'clean',
    'assets',
    'crticalcss',
    callback
  )
})

// Run the audit task to check the code
gulp.task('auditcode', function (callback) {
  runSequence(
    'scsslint',
    'jslint',
    callback
  )
})

// Run the audit task to check the built website for accessibility
// NOTE: Not used yet
/*
gulp.task('auditsite', function (callback) {
  runSequence(
    'deploy',
    callback
  )
})
*/

// Run the audit task to check performance using ...
// NOTE: Not used yet
/*
gulp.task('auditperf', function (callback) {
  runSequence(
    'deploy',
    callback
  )
})
*/

// Non-Public facing tasks
// ---

// Watch task
gulp.task('watch', function (callback) {
  gulp.watch(config.paths.scss + '**/*.scss', ['scss'])
  gulp.watch(config.paths.js + '**/*.js', ['rebuildjs'])
  gulp.watch(config.paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img'])
  gulp.watch(config.paths.icons + '**/*.svg', ['svgicon'])
  gulp.watch([config.paths.pages + '**/*.hbs', config.paths.partials + '**/*.hbs'], ['assets'])
})

// BrowserSync reload task
gulp.task('reload', function (callback) {
  browserSync.reload()
  callback()
})

// Assets task
gulp.task('assets', function (callback) {
  runSequence(
    ['hugo', 'html'],
    ['svgicon', 'scss', 'webpack', 'img', 'copy'],
    'reload',
    callback
  )
})

// Rebuild JS task.
// We need to manually reload BrowserSync after
gulp.task('rebuildjs', function (callback) {
  runSequence(
    'webpack',
    'reload',
    callback
  )
})
