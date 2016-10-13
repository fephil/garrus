// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import mocha from 'gulp-mocha'
import gutil from 'gulp-util'

// Mocha task
gulp.task('mocha', function() {
  return gulp.src([paths.test + '**/*.js'], { read: false })
  .pipe(mocha({
    reporter: 'spec',
    globals: {}
  }))
  .on('error', gutil.log)
})
