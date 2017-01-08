var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [ 
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/client/app/app.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/src/client/public'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ['react-hot','babel']
      },
      { 
        test: /\.(html)$/,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: './src/client/public',
		resolve: {
			extensions: ['','.js','.jsx']
		}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;