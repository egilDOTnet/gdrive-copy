const readFileSync = require('fs').readFileSync;
const babelSettings = JSON.parse(readFileSync('.babelrc'));
const ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: {
    'index': [ './src/app.js' ]
  },
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname + '/src/svelte',
    filename: 'compiled.js',
    chunkFilename: '[name].[id].js'
  },
  plugins: [
    // this gives the compiled codebase access to process.env.NODE_ENV
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: 'inline-source-map'
};