/* eslint-disable no-console */

const chalk = require('chalk');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red(err));
  },

  info: (info) => {
    console.info(chalk.blue(info));
  },
};

module.exports = logger;
