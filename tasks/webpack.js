// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

// JS task
gulp.task('webpack', function (callback) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
      gutil.log("[webpack]", stats.toString({
        colors: true
      }));
    callback();
  });
});
