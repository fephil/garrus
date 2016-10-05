// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import inject from 'gulp-inject-string'

// Copy totally task
gulp.task('copytota11y', () => {
  return gulp.src('node_modules/tota11y/build/tota11y.min.js', {})
  .pipe(gulp.dest(paths.build))
})

// Inject code task
gulp.task('injecttota11y', () => {
  gulp.src(paths.build + '**/*.html')
    .pipe(inject.before('</body>', '<script src="/tota11y.min.js"></script>\n'))
    .pipe(gulp.dest(paths.build))
})

// Main tota11y task
gulp.task('tota11y', ['copytota11y', 'injecttota11y'])
