// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('img', function () {
  return gulp.src(config.paths.img + '{,**/}*.{png,jpg,gif,svg}')
    .pipe(gulpif(argv.debug === true, debug({title: 'Images Optimised:'})))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(config.paths.buildAssets + 'img'));
});
