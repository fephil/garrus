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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
