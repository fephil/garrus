// Load global config and gulp
// import config from '../foley.json'
import gulp from 'gulp'

// Specific task modules
import shell from 'gulp-shell'

// Build Hugo task
gulp.task('hugo', shell.task([
  'hugo'
]))

// Check content task
gulp.task('hugocheck', shell.task([
  'hugo check'
]))
