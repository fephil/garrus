// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const gutil = require('gulp-util')
const webpack = require('webpack')
const webpackConfig = require(__dirname + '/../webpack.config.js')
const standard = require('gulp-standard')

// Linting task
gulp.task('jslint', function () {
  return gulp.src(config.paths.js + '**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})

// Webpack build task
gulp.task('webpack', function (callback) {
  webpack(webpackConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
      colors: true
    }))
    callback()
  })
})
