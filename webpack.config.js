var path = require('path');

module.exports = {
  entry: {
    app: ['./public/js/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  devServer: {
    port: '4000',
    hot: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      }, {
        test: /\.scss$/,
        include: /public\/css/,
        loaders: ['style', 'css', 'sass'],
      }
    ]
  },
  devtool: 'source-map',
};
