// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import standard from 'gulp-standard'

// Linting task
gulp.task('standardlint', () => {
  return gulp.src(paths.js + '**/*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: false
  }))
})
