const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'axios',
      'bootstrap',
      'bootstrap-table',
      'core-js',
      'path',
      'qs',
   //   'react-app-polyfill',
   //   'react-scripts',
      'reactstrap',
      'web-vitals'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
      context: path.resolve(__dirname, "src")
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
  })
  ],
}