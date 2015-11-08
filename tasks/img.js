// Load gulp and global config
var gulp      = require('gulp');
var config    = require('../config.json');
var minimist  = require('minimist');
var gulpif    = require('gulp-if');

// Get command line options we want to use
var knownOptions = {
  string: 'env',
  default: { env: 'dev' }
};

var options = minimist(process.argv.slice(2), knownOptions);

// Specific task modules
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('img', function () {
  return gulp.src(config.paths.img + '{,**/}*.{png,jpg,gif,svg}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(config.paths.buildAssets + 'img'));
});
