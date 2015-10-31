// Load gulp and global config
var gulp          = require('gulp');
var config        = require('../config.json');

// Specific task modules
var sourcemaps    = require('gulp-sourcemaps');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');

// PostCSS
gulp.task('css', function () {
  return gulp.src(config.paths.css + '*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.build));
});
