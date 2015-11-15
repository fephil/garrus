// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
var sourcemaps        = require('gulp-sourcemaps');
var postcss           = require('gulp-postcss');
var atImport          = require('postcss-import');
var customProperties  = require('postcss-custom-properties');
var autoprefixer      = require('autoprefixer');
var pxtorem           = require('postcss-pxtorem');
var mqpacker          = require('css-mqpacker');

// Postcss processors
var processors = [
  atImport(),
  customProperties(),
  autoprefixer({ browsers: config.autoprefixer.browsers }),
  pxtorem({
    replace: true
  }),
  mqpacker()
];

// Postcss task
gulp.task('css', function () {
  return gulp.src(config.paths.css + '*.css')
    .pipe(gulpif(options.debug === true, debug({title: 'CSS Processed:'})))
    .pipe(gulpif(options.env !== 'production', sourcemaps.init())) // Sourcemaps if not on production flag
    .pipe(postcss(processors))
    .pipe(gulpif(options.env !== 'production', sourcemaps.write('.'))) // Sourcemaps if not on production flag
    .pipe(gulp.dest(config.paths.buildAssets + 'css'));
});
