var path = require('path');

module.exports = {
  entry: {
    app: ['./public/js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    port: '4000',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.html$|\.txt$|\.ico$/,
        loaders: ['file'],
        include: 'public/'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
