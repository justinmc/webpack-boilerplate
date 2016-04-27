var path = require('path');
module.exports = {
  entry: {
    app: ['./public/js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    port: '4000',
    hot: true
  },
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
};
