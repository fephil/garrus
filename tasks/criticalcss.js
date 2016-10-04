// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import config from '../config/critical.json'
import { argv as argv } from 'yargs'
import debug from 'gulp-debug'
import gulpif from 'gulp-if'
import critical from 'critical'
const criticalcss = critical.stream

// Get breakpoints from config
const dimensions = config.dimensions || {}

// HTML minify task
gulp.task('crticalcss', () => {
  return gulp.src(paths.build + '**/*.html')
  .pipe(gulpif(argv.debug === true, debug({title: 'CSS Inlined:'})))
  .pipe(criticalcss({
    base: paths.build,
    minify: true,
    extract: false,
    inline: true,
    dimensions: dimensions
  }))
  .pipe(gulp.dest(paths.build))
})
