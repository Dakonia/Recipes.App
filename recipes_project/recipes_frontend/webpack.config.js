const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: 'index.html',
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {loader: 'babel-loader'}
      },
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  }
};