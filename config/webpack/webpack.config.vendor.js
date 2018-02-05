const webpack = require('webpack');
const { dllPath, appPackageJson } = require('../paths');
const pkg = require(appPackageJson);
const { join } = require('path');

if (!pkg.dllPlugin) process.exit(0);

const entries = Object.keys(pkg.dependencies)
  .concat(pkg.dllPlugin.include) // concat modules defined in package.json
  .filter((v, i, a) => a.indexOf(v) === i) // make array unique
  .filter((x) => !pkg.dllPlugin.exclude.includes(x)); // remove excluded modules from array

module.exports = require('./webpack.config.base')({
  context: process.cwd(),
  entry: { appDeps: entries },
  devtool: 'eval',
  output: {
    filename: '[name].dll.js',
    path: dllPath,
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: join(dllPath, '[name].json'),
    }),
  ],
  performance: {
    hints: false,
  },
});
