// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const browserSync = require('browser-sync')

// Browsersync task
gulp.task('browsersync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: config.paths.build
    }
  })
})
