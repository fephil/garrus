// Load global config and gulp
var config  = require(__dirname + '/../foley.json');
var argv    = require('yargs').argv;
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var debug   = require('gulp-debug');
var gulpif  = require('gulp-if');

// Specific task modules
var gutil         = require('gulp-util');
var webpack       = require('webpack');
var webpackConfig = require(__dirname + '/../webpack.config.js');
var standard      = require('gulp-standard');

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
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
      gutil.log("[webpack]", stats.toString({
        colors: true
      }));
    callback();
  });
});
