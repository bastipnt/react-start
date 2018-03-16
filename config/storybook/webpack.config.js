const { styles } = require('../paths');

module.exports = {
  resolve: {
    modules: ['index', 'node_modules', 'styles'],
    alias: {
      styles,
    },
  },
};
