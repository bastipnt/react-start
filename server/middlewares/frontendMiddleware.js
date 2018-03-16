/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./prodMiddleware');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack/webpack.config.dev');
    const addDevMiddlewares = require('./devMiddleware');
    addDevMiddlewares(app, webpackConfig, options);
  }

  return app;
};
