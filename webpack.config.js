const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    // writeToDisk: true,
    watchOptions: { // added autoreload after syntax crash :-)
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin({ // added for hotreload html
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
