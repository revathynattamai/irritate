const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },
    ]
  },
  stats: {
    warnings: false
  }
}