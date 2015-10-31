// Load gulp and global config
var gulp          = require('gulp');
var config        = require('../config.json');

// Specific task modules
var del           = require('del');

// Clean
gulp.task('clean', function() {
  return del([config.paths.build]);
});
