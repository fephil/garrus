// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const htmlmin = require('gulp-htmlmin')

// HTML minify task
gulp.task('html', function () {
  return gulp.src(config.paths.build + '**/*.html')
    .pipe(gulpif(argv.debug === true, debug({title: 'HTML Minified:'})))
    .pipe(gulpif(argv.production === true,
      htmlmin({
        collapseWhitespace: true
      })
    ))
    .pipe(gulp.dest(config.paths.build))
})
