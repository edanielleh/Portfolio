var webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    // + '/public',
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map', //for debugging https://webpack.js.org/configuration/devtool/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: { minimize: true }
        }],
      },
      {
        test: /\.(jpeg|jpg|png|)$/,
        use: 'url-loader',
      }
    ]
  }
};