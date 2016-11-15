// NOTE: paths are relative to each functions folder

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  // exclude [native c/c++] modules and included modules on lambda
  externals: ['aws-sdk', 'scrypt'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
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
};
