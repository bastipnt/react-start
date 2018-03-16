const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const pkg = require(path.resolve(process.cwd(), 'package.json'));

const { createCompiler } = require('react-dev-utils/WebpackDevServerUtils');

const createWebpackDevMiddleware = (compiler, publicPath) => webpackDevMiddleware(compiler, {
  publicPath,
  stats: 'silent',
  logLevel: 'silent',
});

const createWebpackHotMiddleware = (compiler) => webpackHotMiddleware(compiler, {
  quiet: true,
});

module.exports = (app, webpackConfig, options) => {
  const appName = pkg.name;
  const useYarn = true;
  const compiler = createCompiler(webpack, webpackConfig, appName, options.urls, useYarn);
  const devMiddleware = createWebpackDevMiddleware(compiler, webpackConfig.output.publicPath);
  const hotMiddleware = createWebpackHotMiddleware(compiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = devMiddleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
