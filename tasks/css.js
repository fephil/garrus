// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var sourcemaps        = require('gulp-sourcemaps');
var postcss           = require('gulp-postcss');
var atImport          = require('postcss-import');
var customProperties  = require('postcss-custom-properties');
var autoprefixer      = require('autoprefixer');
var pxtorem           = require('postcss-pxtorem');
var mqpacker          = require('css-mqpacker');
var cssnano           = require('cssnano');

// Postcss processors
if (argv.production) {
  var processors = [
    atImport(),
    customProperties(),
    autoprefixer({ browsers: config.autoprefixer.browsers }),
    pxtorem({
      replace: true
    }),
    mqpacker(),
    cssnano()
  ];
}

else {
  var processors = [
    atImport(),
    customProperties(),
    autoprefixer({ browsers: config.autoprefixer.browsers }),
    pxtorem({
      replace: true
    }),
    mqpacker()
  ];
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
