// Load paths and gulp
import paths from '../config/paths.json'
import gulp from 'gulp'

// Specific task modules
import config from '../config/metalsmith.json'
import browserSync from 'browser-sync'
import Metalsmith from 'metalsmith'

// Metalsmith task
gulp.task('metalsmith', function (callback) {
  // Metalsmith instance and options
  const metalsmith = new Metalsmith('.').clean(false)
  const plugins = config.plugins || {}

  metalsmith.source(paths.pages)
  metalsmith.destination(paths.build)

  // For each plugin
  Object.keys(plugins).forEach(function (key) {
    let plugin = require(key) // Require Metalsmith plugins
    let options = plugins[key] // Get options

    // Add plugins to Metalsmith
    metalsmith.use(plugin(options))
  })

  // Build Metalsmith or error out
  metalsmith.build(function (err) {
    if (err) {
      return callback(err)
    }

    browserSync.reload()
    callback()
  })
})
