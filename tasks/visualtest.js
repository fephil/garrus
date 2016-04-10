/**
 * @file visualtest.js - Visual regression testing related Gulp tasks
 * @author Daniel Furze <daniel@furzeface.com>
 * @see {@link https://github.com/garris/BackstopJS}
 */

// Load global config and gulp
import config from '../foley.json'
import gulp from 'gulp'

// Specific task modules
import chug from 'gulp-chug'

// Visual regression testing tasks

// Generate a base config file (only run once)
gulp.task('genConfig', () => {
  return gulp.src(config.paths.backstopGulpfile)
    .pipe(chug({
      tasks: 'genConfig'
    }))
})

// Refreshes the config file after changes
gulp.task('bless', () => {
  return gulp.src(config.paths.backstopGulpfile)
    .pipe(chug({
      tasks: 'bless'
    }))
})

// Creates new reference screenshots for tests
gulp.task('reference', () => {
  return gulp.src(config.paths.backstopGulpfile)
    .pipe(chug({
      tasks: 'reference'
    })).once('end', () => {
      process.exit()
    })
})

// Runs the tests
gulp.task('visualTest', () => {
  return gulp.src(config.paths.backstopGulpfile)
    .pipe(chug({
      tasks: 'test'
    }))
})

// Opens the visual report at http://localhost:3001/compare
gulp.task('openReport', () => {
  return gulp.src(config.paths.backstopGulpfile)
    .pipe(chug({
      tasks: 'openReport'
    }))
})
