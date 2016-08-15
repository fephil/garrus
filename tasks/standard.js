// Load global config and gulp
import config from '../garrus.json'
import gulp from 'gulp'

// Specific task modules
import standard from 'gulp-standard'

// Linting task
gulp.task('standardlint', () => {
  return gulp.src(config.paths.js + '**/*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: false
  }))
})
