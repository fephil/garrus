// Load gulp and global config
var gulp      = require('gulp');
var debug     = require('gulp-debug');
var config    = require('../config.json');
var argv      = require('yargs').argv;
var gulpif    = require('gulp-if');

// Specific task modules
var metalsmith  = require('metalsmith');
var rename      = require('metalsmith-rename');
var handlebars  = require('handlebars');
var layouts     = require('handlebars-layouts');

// Register handlebars layout
handlebars.registerHelper(layouts(handlebars));

// Build Metalsmith
function runMetalsmith(callback) {
  // Metalsmith instance and options
  var metal = new metalsmith('.');
  metal.source(config.paths.pages);
  metal.destination(config.paths.build);

  // Get metalsmith options from config
  var plugins = config.metalsmith.plugins || {};

  // Require plugins and options
  Object.keys(plugins).forEach(function(key) {
    var plugin = require(key);
    var options = plugins[key];

    metal.use(plugin(options));
  });

  // Rename file extensions
  metal.use(rename([[/\.hbs$/, '.html'], [/\.md$/, '.html']]));

  // Build Metalsmith or error out
  metal.build(function(err) {
    if (err) {
      return callback(err);
    }

    callback();
  });
}

// Metalsmith task
gulp.task('metalsmith', function(callback) {
  runMetalsmith(callback);
});
