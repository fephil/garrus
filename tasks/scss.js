// Load global config and gulp
import config from '../foley.json'
import gulp from 'gulp'

// Specific task modules
import { argv as argv } from 'yargs'
import debug from 'gulp-debug'
import gulpif from 'gulp-if'
import browserSync from 'browser-sync'

// Sass modules
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'

// Postcss output modules
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import mqpacker from 'css-mqpacker'
import cssnano from 'cssnano'

// Postcss workflow modules
import syntax from 'postcss-scss'
import reporter from 'postcss-reporter'
import stylelint from 'stylelint'
import stylefmt from 'stylefmt'

// Output specific plugins
const output = [
  autoprefixer({ browsers: config.autoprefixer.browsers }),
  pxtorem({ replace: true }),
  mqpacker({ sort: true })
]

// Add cssnano if there is a production flag
if (argv.production) {
  output.push(cssnano())
}

// Workflow specific plugins
const workflow = [
  stylelint({}),
  reporter({ clearMessages: true })
]

// Sass & Postcss task
gulp.task('scss', () => {
  return gulp.src(config.paths.scss + '**/*.scss')
  .pipe(gulpif(argv.debug === true, debug({title: 'CSS Processed:'})))
  .pipe(gulpif(!argv.production, sourcemaps.init())) // Sourcemaps if there is no production flag
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(output))
  .pipe(gulpif(!argv.production, sourcemaps.write('.'))) // Sourcemaps if there is no production flag
  .pipe(gulp.dest(config.paths.buildAssets + 'css'))
  .pipe(browserSync.stream({match: '**/*.css'}))
})

// stylefmt task
gulp.task('scssfmt', () => {
  return gulp.src([config.paths.scss + '**/*.scss', '!' + config.paths.scss + 'vendor{,/**}'])
  .pipe(postcss([stylefmt], {syntax: syntax}))
  .pipe(gulp.dest(config.paths.scss))
})

// Stylelint task
gulp.task('scsslint', () => {
  return gulp.src([config.paths.scss + '**/*.scss', '!' + config.paths.scss + 'vendor{,/**}'])
  .pipe(postcss(workflow, {syntax: syntax}))
})
