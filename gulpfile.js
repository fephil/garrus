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

// Watch task
gulp.task('watch', function (callback) {
  gulp.watch(config.paths.scss + '**/*.scss', ['scss'])
  gulp.watch(config.paths.js + '**/*.js', ['webpack'])
  gulp.watch(config.paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img'])
  gulp.watch(config.paths.icons + '**/*.svg', ['svgicon'])
  gulp.watch(config.paths.fonts + '**/*', ['copy'])
  gulp.watch(['config.yaml', config.paths.archetypes + '**/*', config.paths.content + '**/*', config.paths.data + '**/*', config.paths.templates + '**/*'], ['hugo'])
  gulp.watch([config.paths.build + '**/*.html', config.paths.build + '**/*.js']).on('change', browserSync.reload)
})

// Build website, either with development or minified assets and run server with live reloading
gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'hugo',
    ['html', 'svgicon', 'scss', 'webpack', 'img', 'copy'],
    'browsersync',
    'watch',
    callback
  )
})

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', function (callback) {
  runSequence(
    'clean',
    'hugo',
    ['html', 'svgicon', 'scss', 'webpack', 'img', 'copy'],
    'crticalcss',
    callback
  )
})

// Run the audit task to check the code
gulp.task('auditcode', function (callback) {
  runSequence(
    'scsslint',
    'jslint',
    'hugocheck',
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
