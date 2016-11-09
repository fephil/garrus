'use strict'

// Load gulp
import gulp from 'gulp'

// Load modules to run tasks from files
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
const tasks = requireDir(__dirname + '/tasks') // eslint-disable-line

// Build website, either with development or minified assets and run server with live reloading
gulp.task('default', (callback) => {
  runSequence(
    'clean',
    'cachebusting',
    'metalsmith',
    'mocha',
    ['htmlmin', 'svgsprite', 'scss', 'webpack', 'img', 'copy'],
    ['browsersync', 'watch'],
    callback
  )
})

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', (callback) => {
  runSequence(
    'clean',
    'cachebusting',
    'metalsmith',
    'mocha',
    ['htmlmin', 'svgsprite', 'scss', 'webpack', 'img', 'copy'],
    'crticalcss',
    callback
  )
})

// Run a task to check the code
gulp.task('auditcode', (callback) => {
  runSequence(
    'scssfmt',
    'scsslint',
    'standardlint',
    'mocha',
    callback
  )
})

// Run a task to build website and add tota11y
gulp.task('audita11y', (callback) => {
  runSequence(
    'deploy',
    'tota11y',
    'browsersync',
    callback
  )
})
