// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
var htmlmin = require('gulp-htmlmin');

// HTML minify task
gulp.task('html', function () {
  return gulp.src(config.paths.build + '**/*.html')
    .pipe(gulpif(options.debug === true, debug({title: 'HTML Minified:'})))
    .pipe(gulpif(options.production === true,
      htmlmin({
        collapseWhitespace: true
      })
    ))
    .pipe(gulp.dest(config.paths.build));
});
