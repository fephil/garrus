// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
var webpack = require('webpack-stream');

// JS task
gulp.task('webpack', function () {
  return gulp.src(config.paths.js + 'app.js')
    .pipe(webpack( require('../webpack.config.js') ))
    .pipe(gulp.dest(config.paths.build));
});
