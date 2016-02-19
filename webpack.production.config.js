var path = require('path');

var config = {
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    path: __dirname + '/client/public',
    publicPath: 'client/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;