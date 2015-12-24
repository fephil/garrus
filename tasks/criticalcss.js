// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const critical = require('critical').stream

// HTML minify task
gulp.task('crticalcss', function () {
  return gulp.src(config.paths.build + '/*.html')
    .pipe(gulpif(argv.debug === true, debug({title: 'CSS Inlined:'})))
    .pipe(critical({
      base: config.paths.build + '/',
      width: 320,
      height: 480,
      minify: true,
      extract: false,
      inline: true
    }))
    .pipe(gulp.dest(config.paths.build))
})
