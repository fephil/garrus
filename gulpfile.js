// Load gulp and global config
var gulp          = require('gulp');
var config        = require('./config.json');

// Load modules to run tasks
var requireDir    = require('require-dir');
var tasks         = requireDir('./tasks');
var runSequence   = require('run-sequence');

// Tasks
gulp.task('default', function(callback) {
  runSequence(
              'clean',
              ['css'],
              'server',
              callback
            );
});
