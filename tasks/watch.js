// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Watch task
gulp.task('watch', () => {
  gulp.watch(paths.scss + '**/*.scss', ['scss'])
  gulp.watch(paths.js + '**/*.js', ['webpack'])
  gulp.watch(paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img'])
  gulp.watch(paths.icons + '**/*.svg', ['svgsprite'])
  gulp.watch([paths.fonts + '**/*', paths.files + '**/*'], ['copy'])
  gulp.watch([paths.data + '**/*.json', paths.layouts + '**/*.hbs', paths.pages + '**/*.hbs', paths.partials + '**/*.hbs'], ['metalsmith'])
  gulp.watch(paths.test + '**/*.js', ['mocha'])
})
