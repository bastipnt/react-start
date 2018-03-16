// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const webpack = require('webpack');
const config = require('../config/webpack/webpack.config.prod');
const logger = require('../server/logger');
const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const printBuildError = require('react-dev-utils/printBuildError');
const fs = require('fs-extra');
const {
  appBuild, appHtml, appIndexJs,
} = require('../config/paths');

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Warn and crash if required files are missing
if (!checkRequiredFiles([appHtml, appIndexJs])) process.exit(1);

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(appBuild)
  .then((previousFileSizes) => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(appBuild);
    // Start the webpack build
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        logger.warn('Compiled with warnings.\n');
        logger.warn(warnings.join('\n\n'));
        logger.warn('\nSearch for the keywords to learn more about each warning.');
        logger.warn('To ignore, add "// eslint-disable-next-line" to the line before.\n');
      } else {
        logger.success('Compiled successfully.\n');
      }

      logger.info('File sizes after gzip:\n');
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );

      logger.printHostingInstructions();
    },
    (err) => {
      logger.error('Failed to compile.\n');
      printBuildError(err);
      process.exit(1);
    }
  );

// Create the production build and print the deployment instructions.
const build = (previousFileSizes) => {
  logger.info('Creating an optimized production build...');

  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) return reject(err);

      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) messages.errors.length = 1;

        return reject(new Error(messages.errors.join('\n\n')));
      }

      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false')
        && messages.warnings.length) {
        logger.warn(`\nTreating warnings as errors because process.env.CI = true.\n
        Most CI servers set it automatically.\n`);
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
};
