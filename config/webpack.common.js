var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['file-loader?name=assets/img/[name].[ext]']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({use:['css-loader','sass-loader']})
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract({use:['css-loader']})
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: 'raw-loader'
      }
    ]
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: '!!ejs-loader!src/index.html',
      baseurl: (process.env.NODE_ENV=='prod') ?'/angular-webpack-seed/':'/'
    }),

    new webpack.DefinePlugin({
      angular_version: JSON.stringify(require(helpers.root("node_modules","@angular/core/package.json")).version),
      webpack_version: JSON.stringify(require(helpers.root("node_modules","webpack/package.json")).version)
    })    
  ]
};
