import path from 'path';
// NOTE: paths are relative to each functions folder
// const webpack = require('webpack');

export default ({
  entry: path.join(process.cwd(), './src/index.js'),
  target: 'node',
  output: {
    path: path.join(process.cwd(), './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    // included modules on lambda
    'imagemagick',
    'aws-sdk',
    // [native c/c++] modules and
    'scrypt',
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
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
});
