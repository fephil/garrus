// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const shell = require('gulp-shell')

// Hugo task
gulp.task('hugo', shell.task([
  'hugo'
]))
