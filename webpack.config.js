var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/public",
    filename: "/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('/stylesheets/style.css', {
          allChunks: true
      })
    ]
};
