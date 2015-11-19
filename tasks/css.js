// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var sourcemaps  = require('gulp-sourcemaps');
var postcss     = require('gulp-postcss');

// Postcss css4 specification modules
var atImport          = require('postcss-import');
var customProperties  = require('postcss-custom-properties');
var nesting           = require('postcss-nesting');
var calc              = require('postcss-calc');

// Postcss workflow modules
var lost          = require('lost');
var autoprefixer  = require('autoprefixer');
var pxtorem       = require('postcss-pxtorem');
var mqpacker      = require('css-mqpacker');
var cssnano       = require('cssnano');

var processors = [
  atImport(),
  customProperties(),
  nesting(),
  calc(),
  lost(),
  autoprefixer({ browsers: config.autoprefixer.browsers }),
  pxtorem({
    replace: true
  }),
  mqpacker()
];

// Add cssnano if there is a production flag
if (argv.production) {
  processors.push(cssnano());
}

// Postcss task
gulp.task('css', function () {
  return gulp.src(config.paths.css + '*.css')
    .pipe(gulpif(argv.debug === true, debug({title: 'CSS Processed:'})))
    .pipe(gulpif(!argv.production, sourcemaps.init())) // Sourcemaps if there is no production flag
    .pipe(postcss(processors))
    .pipe(gulpif(!argv.production, sourcemaps.write('.'))) // Sourcemaps if there is no production flag
    .pipe(gulp.dest(config.paths.buildAssets + 'css'));
});
