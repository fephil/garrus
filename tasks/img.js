// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const browserSync = require('browser-sync')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')

gulp.task('img', function () {
  return gulp.src(config.paths.img + '{,**/}*.{png,jpg,gif,svg}')
    .pipe(gulpif(argv.debug === true, debug({title: 'Images Optimised:'})))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.paths.buildAssets + 'img'))
    .pipe(browserSync.stream())
})
