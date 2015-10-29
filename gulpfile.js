// Load gulp modules
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();

// Load non-gulp modules
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');

// Config
// TBA
var buildFolder = '_dist/';

// PostCSS
gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(buildFolder));
});

// Browsersync
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: buildFolder
    }
  });
});

// Extra tasks TBA
gulp.task('default', ['server']);
