
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
   output: {
     filename: '[name].main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };