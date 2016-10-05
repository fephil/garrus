// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import svgSprite from 'gulp-svg-sprite'
import { argv as argv } from 'yargs'
import debug from 'gulp-debug'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'

// Enable or disable example HTML page depending on production flag
let examplePage

if (argv.production === true) {
  examplePage = false
} else {
  examplePage = true
}

// SVG sprite config
var svgConfig = {
  mode: {
    symbol: {
      dest: paths.build,
      sprite: 'assets/svgsprite.svg',
      render: {
        scss: {
          dest: '../' + paths.scss + 'components/_svgsprite.scss'
        }
      },
      example: examplePage
    }
  },
  log: 'info',
  svg: {
    xmlDeclaration: true,
    doctypeDeclaration: true
  },
  shape: {
    transform: ['svgo'], // default svgo settings
  }
}

// SVG sprite task
gulp.task('svgsprite', function() {
  return gulp.src(paths.icons + '/**/*.svg')
    .pipe(gulpif(argv.debug === true, debug({title: 'SVG Spritesheet:'})))
    .pipe(plumber())
    .pipe(svgSprite(svgConfig)).on('error', function(error){ console.log(error) })
    .pipe(gulp.dest('.'))
});
