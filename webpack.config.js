module.exports = {
  entry: ['./src/js/global.js', './src/js/app.js'],
  output: {
    filename: './_dist/assets/js/bundle.js',
  },
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
