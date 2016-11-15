// NOTE: paths are relative to each functions folder
const Webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  // exclude native modules and included modules on lambda
  externals: ['aws-sdk', 'scrypt'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          // presets: [
          //   'latest',
          //   'stage-0',
          // ],
          plugins: [
            'check-es2015-constants',
            'transform-es2015-template-literals',
            'transform-es2015-literals',
            'transform-es2015-function-name',
            'transform-es2015-arrow-functions',
            'transform-es2015-block-scoped-functions',
            'transform-es2015-classes',
            'transform-es2015-object-super',
            'transform-es2015-shorthand-properties',
            'transform-es2015-duplicate-keys',
            'transform-es2015-computed-properties',
            'transform-es2015-for-of',
            'transform-es2015-sticky-regex',
            'transform-es2015-unicode-regex',
            'transform-es2015-spread',
            'transform-es2015-parameters',
            'transform-es2015-destructuring',
            'transform-es2015-block-scoping',
            'transform-es2015-typeof-symbol',
            'transform-es2015-modules-commonjs',
            'transform-promise-to-bluebird',
            'transform-runtime',
            ['transform-async-to-module-method', {
              module: 'bluebird',
              method: 'coroutine',
            }],
          ],
          cacheDirectory: true,
        },
        exclude: /node_modules/,
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
