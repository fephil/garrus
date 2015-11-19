var webpack = require('webpack');

module.exports = {
  entry: ['./src/js/global.js', './src/js/app.js'],
  output: {
    filename: './_dist/assets/js/bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
    ],
  },
  standard: {
    parser: 'babel-eslint'
  }
};
