// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import browserSync from 'browser-sync'

// Browsersync task
gulp.task('browsersync', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: paths.build
    }
  })
})
