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
    console.log(`Server started ${chalk.green('✓')}`);
    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`https://${host}:${port}`)}
      LAN: ${chalk.magenta(`https://${ip.address()}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },

  printHostingInstructions: () => {
    console.log(`\nThe ${chalk.blue('build')} folder is ready to be deployed.`, divider);
    console.log(chalk.blue('You can serve your app now with'), chalk.yellow('`yarn serve`\n'));
  },
};

module.exports = logger;
