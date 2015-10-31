// Load gulp modules
var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();

// Load non-gulp modules
var browserSync   = require('browser-sync').create();
var autoprefixer  = require('autoprefixer');
var del           = require('del');

// Load config
var config        = require('./config.json');

// PostCSS
gulp.task('css', function () {
  return gulp.src(config.paths.css + '*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss([ autoprefixer({ }) ]))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.build));
});

// Browsersync
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: config.paths.build
    }
  });
});

// Clean
gulp.task('clean', function() {
  return del([config.paths.build]);
});

// Extra tasks TBA
gulp.task('default', ['server']);
