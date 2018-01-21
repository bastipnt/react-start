/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

const logger = {

  // Called whenever there's an error on the server we want to print
  success: (success) => console.log(chalk.blue(success)),
  info: (info) => console.info(chalk.blue(info)),
  warn: (warn) => console.warn(chalk.yellow(warn)),
  error: (err) => console.error(chalk.red(err)),

  printServerInfo: (port, host) => {
    console.log(`Server started ! ${chalk.green('✓')}`);
    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
