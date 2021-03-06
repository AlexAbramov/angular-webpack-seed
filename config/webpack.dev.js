const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('.'),
    publicPath: 'http://localhost:8081/',
    sourceMapFilename: '[name].js.map',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
