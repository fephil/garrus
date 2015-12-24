// Load global config and gulp
const config = require(__dirname + '/../foley.json')
const argv = require('yargs').argv
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const debug = require('gulp-debug')
const gulpif = require('gulp-if')

// Specific task modules
const glob = require('glob')
const gulpicon = require('gulpicon/tasks/gulpicon')
const svgConfig = require(__dirname + '/icons/config.js')

// Output folder
svgConfig.dest = config.paths.svgicon

// Get SVG icons
const svgFiles = glob.sync(config.paths.icons + '**/*.svg')

// Icon task
gulp.task('svgicon', gulpicon(svgFiles, svgConfig))
