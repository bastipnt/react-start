// No need to build the DLL in production
if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

const { mkdir, echo, exec } = require('shelljs');
const { existsSync, writeFileSync } = require('fs');
const { join } = require('path');
const { dllPath, appPackageJson } = require('../config/paths');
const pkg = require(appPackageJson);

mkdir('-p', dllPath);
echo('Building the webpack DLL...');

const dllManifestPath = join(dllPath, 'package.json');

if (!existsSync(dllManifestPath)) {
  writeFileSync(
    dllManifestPath,
    JSON.stringify({
      name: 'react-start-dlls',
      private: true,
      author: pkg.author,
      repository: pkg.repository,
      version: pkg.version,
    }),
    'utf8'
  );
}

// the BUILDING_DLL env var is set to avoid confusing the development environment
exec('cross-env BUILDING_DLL=true webpack --display-chunks --color --config config/webpack/webpack.config.vendor.js --hide-modules');
