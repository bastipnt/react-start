/**
 * COMMON WEBPACK CONFIGURATION
 */

const webpack = require('webpack');
// const eslintFormatter = require('react-dev-utils/eslintFormatter');
const { appBuild, appSrc } = require('../paths');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: appBuild,
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      // {
      //   test: /\.jsx?$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: eslintFormatter,
      //         eslintPath: require.resolve('eslint'),

      //       },
      //       loader: require.resolve('eslint-loader'),
      //     },
      //   ],
      //   include: path.resolve(process.cwd(), 'src'),
      // },
      {
        test: /\.jsx?$/, // Transform all .js and .jsx files required in /src with Babel
        use: {
          loader: 'babel-loader',
        },
        include: appSrc,
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ]),
  resolve: {
    modules: ['index', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
