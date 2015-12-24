// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const Eyeglass = require('eyeglass').Eyeglass

const sassOptions = {} // put whatever eyeglass and node-sass options you need here.
const eyeglass = new Eyeglass(sassOptions)

// Postcss workflow modules
const scss = require('postcss-scss')
const reporter = require('postcss-reporter')
const stylelint = require('stylelint')

// Postcss output modules
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const mqpacker = require('css-mqpacker')
const cssnano = require('cssnano')

// Workflow specific plugins
const workflow = [
  stylelint({ extends: [ './tasks/config/.stylelint.json' ] }),
  reporter({ clearMessages: true })
]

// Output specific plugins
const output = [
  autoprefixer({ browsers: config.autoprefixer.browsers }),
  pxtorem({ replace: true }),
  mqpacker()
]

// Add cssnano if there is a production flag
if (argv.production) {
  output.push(cssnano())
}

// Stylelint task
gulp.task('scsslint', function () {
  return gulp.src([config.paths.scss + '**/*.scss', '!' + config.paths.scss + 'vendor{,/**}'])
    .pipe(postcss(workflow, {syntax: scss}))
})

// Sass & Postcss task
gulp.task('scss', function () {
  return gulp.src(config.paths.scss + '**/*.scss')
    .pipe(gulpif(argv.debug === true, debug({title: 'CSS Processed:'})))
    .pipe(gulpif(!argv.production, sourcemaps.init())) // Sourcemaps if there is no production flag
    .pipe(sass(eyeglass.sassOptions()).on('error', sass.logError))
    .pipe(postcss(output))
    .pipe(gulpif(!argv.production, sourcemaps.write('.'))) // Sourcemaps if there is no production flag
    .pipe(gulp.dest(config.paths.buildAssets + 'css'))
    .pipe(browserSync.stream({match: '**/*.css'}))
})
