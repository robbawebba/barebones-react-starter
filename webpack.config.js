var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: { javascript: './src/client/app/app.jsx', html: './src/client/public/index.html' },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: BUILD_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      { 
        test: /\.(html)$/,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  devServer: {
	  headers: {
      historyApiFallback: true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization" },
		  "Access-Control-Allow-Credentials": "true",
		  host: 'localhost',
		  port: 8000
		},
		resolve: {
			extensions: ['','.js','.jsx']
		}
};

module.exports = config;