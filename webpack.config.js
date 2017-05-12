const readFileSync = require('fs').readFileSync;

const babelSettings = JSON.parse(readFileSync('.babelrc'));


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