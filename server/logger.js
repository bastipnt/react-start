/* eslint-disable no-console */

const chalk = require('chalk');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  success: (success) => console.log(chalk.blue(success)),
  info: (info) => console.info(chalk.blue(info)),
  warn: (warn) => console.warn(chalk.yellow(warn)),
  error: (err) => console.error(chalk.red(err)),
};

module.exports = logger;
