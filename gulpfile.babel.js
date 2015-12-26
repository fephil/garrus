'use strict'

// Load global config and gulp
import config from './foley.json'
import gulp from 'gulp'

// Load modules to run tasks from files
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
const tasks = requireDir(__dirname + '/tasks') // eslint-disable-line

// Specific task modules
import browserSync from 'browser-sync'

// Watch task
gulp.task('watch', () => {
  gulp.watch(config.paths.scss + '**/*.scss', ['scss'])
  gulp.watch(config.paths.js + '**/*.js', ['webpack'])
  gulp.watch(config.paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img'])
  gulp.watch(config.paths.icons + '**/*.svg', ['svgicon'])
  gulp.watch(config.paths.fonts + '**/*', ['copy'])
  gulp.watch(['config.yaml', config.paths.archetypes + '**/*', config.paths.content + '**/*', config.paths.data + '**/*', config.paths.templates + '**/*'], ['hugo'])
  gulp.watch([config.paths.build + '**/*.html', config.paths.build + '**/*.js']).on('change', browserSync.reload)
})

// Build website, either with development or minified assets and run server with live reloading
gulp.task('default', callback => {
  runSequence(
    'clean',
    'hugo',
    ['html', 'svgicon', 'scss', 'webpack', 'img', 'copy'],
    ['browsersync', 'watch'],
    callback
  )
})

// Build website, either with development or minified assets depending on flag
gulp.task('deploy', callback => {
  runSequence(
    'clean',
    'hugo',
    ['html', 'svgicon', 'scss', 'webpack', 'img', 'copy'],
    'crticalcss',
    callback
  )
})

// Run the audit task to check the code
gulp.task('auditcode', callback => {
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
gulp.task('auditsite', callback => {
  runSequence(
    'deploy',
    callback
  )
})
*/

// Run the audit task to check performance using ...
// NOTE: Not used yet
/*
gulp.task('auditperf', callback => {
  runSequence(
    'deploy',
    callback
  )
})
*/
