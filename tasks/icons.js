// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var options   = require('minimist')(process.argv.slice(2));
var gulpif    = require('gulp-if');

// Specific task modules
var glob      = require('glob');
var gulpicon  = require('gulpicon/tasks/gulpicon');
var svgConfig = require(__dirname + '/icons/config.js');

// Output folder
svgConfig.dest = config.paths.svgicon;

// Get SVG icons
var svgFiles = glob.sync(config.paths.icons + '*.svg');

// Icon task
gulp.task('svgicon', gulpicon(svgFiles, svgConfig));
