// NOTE: paths are relative to each functions folder
const Webpack = require('webpack');
const fs = require('fs');

const nodeModules = { 'aws-sdk': 'aws-sdk' };
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = mod;
  });

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'latest',
          ],
          plugins: [
            'transform-promise-to-bluebird',
            ['transform-async-to-module-method', {
              module: 'bluebird',
              method: 'coroutine',
            }],
            'transform-runtime',
          ],
          cacheDirectory: true,
        },
        // exclude: [/node_modules/],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  // plugins: [
  //   new Webpack.LoaderOptionsPlugin({
  //     minimize: true,
  //     debug: false,
  //   }),
  //   new Webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false },
  //     output: {
  //       comments: false,
  //     },
  //     mangle: false,
  //   }),
  // ],
};
