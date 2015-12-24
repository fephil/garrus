// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const del = require('del')

// Clean task
gulp.task('clean', function () {
  return del([
    config.paths.build,
    config.paths.svgicon
  ])
})
