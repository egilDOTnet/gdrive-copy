/*
 modified from https://github.com/webpack/webpack/blob/0dd0830478e5f5dd0e36930092e5ce6b6e6d3f39/lib/BannerPlugin.js
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */

'use strict';

const ConcatSource = require('webpack-sources').ConcatSource;
// const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");

const wrapComment = str => {
  if (!str.includes('\n')) return `/*! ${str} */`;
  return `/*!\n * ${str.split('\n').join('\n * ')}\n */`;
};

class BannerPlugin {
  constructor(options) {
    if (arguments.length > 1)
      throw new Error(
        'BannerPlugin only takes one argument (pass an options object)'
      );
    if (typeof options === 'string')
      options = {
        banner: options
      };
    this.options = options || {};
    this.top = this.options.raw ? options.top : wrapComment(options.top);
    this.bottom = this.options.raw
      ? options.bottom
      : wrapComment(options.bottom);
  }

  apply(compiler) {
    const options = this.options;
    const top = this.top;
    const bottom = this.bottom;

    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        chunks.forEach(chunk => {
          if (options.entryOnly && !chunk.isInitial()) return;
          chunk.files
            // .filter(ModuleFilenameHelpers.matchObject.bind(undefined, options))
            .forEach(file => {
              let basename;
              let query = '';
              let filename = file;
              const hash = compilation.hash;
              const querySplit = filename.indexOf('?');

              if (querySplit >= 0) {
                query = filename.substr(querySplit);
                filename = filename.substr(0, querySplit);
              }

              if (filename.indexOf('/') < 0) {
                basename = filename;
              } else {
                basename = filename.substr(filename.lastIndexOf('/') + 1);
              }

              const topText = compilation.getPath(top, {
                hash,
                chunk,
                filename,
                basename,
                query
              });

              const bottomText = compilation.getPath(bottom, {
                hash,
                chunk,
                filename,
                basename,
                query
              });

              return (compilation.assets[file] = new ConcatSource(
                topText,
                '\n',
                compilation.assets[file],
                '\n',
                bottomText
              ));
            });
        });
        callback();
      });
    });
  }
}

module.exports = BannerPlugin;
