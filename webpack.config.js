const readFileSync = require('fs').readFileSync;
const babelSettings = JSON.parse(readFileSync('.babelrc'));
const ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
// const wrapPlugin = require('./webpackWrapPlugin.js');

let plugins = [
  // this gives the compiled codebase access to process.env.NODE_ENV
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  // new wrapPlugin({top: '<script>', bottom: '</script>', raw: true}),
  // new webpack.BannerPlugin({banner: 'this is a test banner', raw: true})
  new webpack.optimize.UglifyJsPlugin({
    beautify: true,
    mangle: false,
    sourceMap: false,
    comments: false
  })
];

// if (ENV === 'production') {
//   plugins = Array.prototype.concat(plugins.slice(0, 1), [new webpack.optimize.UglifyJsPlugin({
//     sourceMap: false,
//     comments: false
//   })], plugins.slice(1))
// }

module.exports = {
  entry: {
    index: ['./src/app.js']
  },
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    path: __dirname + '/src/svelte',
    filename: 'compiled.js',
    chunkFilename: '[name].[id].js'
  },
  plugins: plugins,
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
