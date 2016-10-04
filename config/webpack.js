import paths from '../config/paths.json'
import { argv as argv } from 'yargs'
import webpack from 'webpack'
import CommonsChunkPlugin from '../node_modules/webpack/lib/optimize/CommonsChunkPlugin'
let theSourcemap

// Create plugins array
const plugins = [
  new CommonsChunkPlugin('commons.js'),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
]

// Add Uglify task to plugins array if there is a production flag
// If not production, generate sourcemap
if (argv.production) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
  theSourcemap = ''
}
else {
  theSourcemap = 'source-map'
}

module.exports = {
  entry: {
    home: './' + paths.js + 'app-home',
    blog: './' + paths.js + 'app-blog'
  },
  output: {
    path: './' + paths.buildAssets + 'js/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/' + paths.buildAssets + 'js/'
  },
  devtool: theSourcemap,
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
