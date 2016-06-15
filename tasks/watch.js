// Load global config and gulp
import config from '../foley.json'
import gulp from 'gulp'

// Watch task
gulp.task('watch', () => {
  gulp.watch(config.paths.scss + '**/*.scss', ['scss'])
  gulp.watch(config.paths.js + '**/*.js', ['webpack'])
  gulp.watch(config.paths.img + '{,**/}*.{png,jpg,gif,svg}', ['img'])
  gulp.watch(config.paths.icons + '**/*.svg', ['svgsprite'])
  gulp.watch([config.paths.fonts + '**/*', config.paths.files + '**/*'], ['copy'])
  gulp.watch([config.paths.data + '**/*.json', config.paths.layouts + '**/*.hbs', config.paths.pages + '**/*.hbs', config.paths.partials + '**/*.hbs'], ['metalsmith'])
})
