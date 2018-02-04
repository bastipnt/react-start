/* eslint consistent-return:0 */

const isProduction = process.env.NODE_ENV === 'production';

const express = require('express');
const http = require('http');
const https = require('https');
const logger = require('./logger');

const argv = require('./argv');
const DEFAULT_PORT = require('./port');
const clearConsole = require('react-dev-utils/clearConsole');
const openBrowser = require('react-dev-utils/openBrowser');
const setup = require('./middlewares/frontendMiddleware');
const { appBuild, keyPath, certPath } = require('../config/paths');
const fs = require('fs');

const app = express();
const isInteractive = process.stdout.isTTY;

const {
  choosePort,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || argv.h || process.env.HOST;
const openInBrowser = argv.o;
const HOST = customHost || 'localhost';

choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    if (port == null) return; // We have not found a port.

    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const urls = prepareUrls(protocol, HOST, port);

    // In production we need to pass these values in instead of relying on webpack
    setup(app, {
      outputPath: appBuild,
      publicPath: '/',
      urls,
    });

    let serverObject;
    if (protocol === 'https') {
      const privateKey = fs.readFileSync(keyPath).toString();
      const certificate = fs.readFileSync(certPath).toString();
      const credentials = { key: privateKey, cert: certificate };
      serverObject = https.createServer(credentials, app);
    } else {
      serverObject = http.createServer(app);
    }

    // Start your app.
    const devServer = serverObject.listen(port, HOST, (err) => {
      if (err) return logger.error(err.message);
      if (isInteractive) clearConsole();
      if (isProduction) logger.printServerInfo(port, HOST);
      else logger.info(`Starting the ${process.env.NODE_ENV} server...\n`);
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
