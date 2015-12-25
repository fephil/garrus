// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
// ...

// Copy task
gulp.task('copy', function () {
  return gulp.src(config.paths.fonts + '**/*', {})
  .pipe(gulpif(argv.debug === true, debug({title: 'Files Copied:'})))
  .pipe(gulp.dest(config.paths.buildAssets + 'fonts'))
})
