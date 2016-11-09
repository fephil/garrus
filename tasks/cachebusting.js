// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import fs from 'fs'

// HTML minify task
gulp.task('cachebusting', (callback) => {
  fs.writeFile(paths.data + 'cachebusting.json', '{"date": "'+ new Date().getTime() + '"}', callback);
})
