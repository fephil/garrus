// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import del from 'del'

// Clean task
gulp.task('clean', () => {
  return del([
    paths.build
  ])
})
