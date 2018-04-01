// const isDev = process.env.NODE_ENV === 'development';

// module.exports = {
//   mode: isDev ? 'development' : 'production',
//   entry: [
//     '@babel/polyfill', 
//     './client/index.js'
//   ],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       }
//     ]
//   }
// }
var webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
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
      }
    ]
  }
};