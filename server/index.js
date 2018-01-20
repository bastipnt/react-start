/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const DEFAULT_PORT = require('./port');
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');

const app = express();
const isInteractive = process.stdout.isTTY;

const {
  choosePort,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || argv.h || process.env.HOST;
const openInBrowser = argv.o;
const HOST = customHost || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    if (port == null) return; // We have not found a port.

    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const urls = prepareUrls(protocol, HOST, port);

    // In production we need to pass these values in instead of relying on webpack
    setup(app, {
      outputPath: resolve(process.cwd(), 'build'),
      publicPath: '/',
      urls,
    });

    // Start your app.
    const devServer = app.listen(port, HOST, (err) => {
      if (err) return logger.error(err.message);
      if (isInteractive) clearConsole();
      logger.info('Starting the development server...\n');
      if (openInBrowser) openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        devServer.close();
        logger.info('\nServer stopped!');
        process.exit();
      });
    });
  })
  .catch((err) => {
    if (err && err.message) logger.error(err.message);
    process.exit(1);
  });
