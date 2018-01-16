# Easy start with react

## About
Boilerplate for ne easy start with react apps.

Created with ❤️ by [Basti Paintner](https://twitter.com/lItc0de).

## Table of Contents

- [Getting started](#getting-started)
- [Whats inside](#whats-inside)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
  - [yarn lint:eslint](#yarn-lint-eslint)
  - [yarn lint:staged](#yarn-lint-staged)
- [Routing](#routing)
- [State management](#state-management)
- [Styling](#styling)
- [Locales](#locales)
- [Deployment](#deployment)
- [Testing](#testing)
- [Assets](#assets)
- [Linting](#linting)
- [Babel](#babel)
  - [Plugins](#plugins)
  - [Presets](#presets)
  - [Env](#env)
- [Webpack](#webpack)

## Getting started
- Clone this repo: `git clone https://github.com/lItc0de/react-start.git`
- Move into repo: `cd react-start`
- Install modules using [yarn](https://yarnpkg.com/lang/en/docs/install/): `yarn install`
- Start app on http://localhost:3000: `yarn start`

Now you can start creating your app!

## Whats inside


## Features


## Folder Structure


## Available Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `yarn test`

### `yarn build`

### `yarn lint:eslint`

Lints your app and shows linting errors in the console

### `yarn lint:staged`

links to [yarn lint:eslint](#yarn-lint-eslint)

## Routing


## State management


## Styling

**Style loaders**

- [css-loader](https://github.com/webpack-contrib/css-loader): The css-loader interprets `@import` and `url()` like
`import/require()` and will resolve them.

- [style-loader](https://github.com/webpack-contrib/style-loader): Style loader for webpack to combine with `css-loader`

- [styled-components](https://github.com/styled-components/styled-components): Visual primitives for the component age.
Use the best bits of ES6 and CSS to style your apps without stress 💅


## Locales


## Deployment


## Testing

For testing we use [Jest](https://facebook.github.io/jest): Jest is used by Facebook to test all JavaScript code
including React applications. One of Jest's philosophies is to provide an integrated `zero-configuration` experience.

## Assets

- [file-loader](https://github.com/webpack-contrib/file-loader): Instructs webpack to emit the required object as file
and to return its public URL

- [url-loader](https://github.com/webpack-contrib/url-loader): The `url-loader` works like the `file-loader`, but can
return a `DataURL` if the file is smaller than a byte limit.

- [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader): Image loader module for webpack. Minify
`PNG`, `JPEG`, `GIF`, `SVG` and `WEBP` images with [imagemin](https://github.com/imagemin/imagemin)<br/>
  **warning** image-webpack-loader > imagemin-pngquant > pngquant-bin > bin-build > download > gulp-decompress >
  gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at
  https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5



## Linting

- Lint your code before commiting with [lint-staged](https://github.com/okonet/lint-staged)<br>
  for git hooks we use [pre-commit](https://github.com/observing/pre-commit)
- **Configuration:**
  - Parser: [babel-eslint](https://github.com/babel/babel-eslint): Use for [Flow](https://github.com/facebook/flow) and
  other experimantal features, that are not supportet by the [default parser](https://github.com/eslint/espree).
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb): This package
  provides Airbnb's .eslintrc as an extensible shared config.
  - Env: Specify supportet platfroms
  - Plugins:
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): Adds linting rules for react
    - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y): Static AST checker for
    [accessibility rules](https://github.com/reactjs/react-a11y) on JSX elements.
  - Parser Options: Specify the JavaScript language options you want to support as explained
  [here](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  - Rules: Overwrite default rules.
  - Settings: Add [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), an ESLint plugin with rules
  that help validate proper imports.

## Babel

### Plugins
- [styled-components](https://www.styled-components.com/docs/tooling#babel-plugin): This plugin adds support for
server-side rendering, for minification of styles and gives you a nicer debugging experience.

### Presets
- [Env preset](https://babeljs.io/docs/plugins/preset-env): Babel preset that automatically determines the Babel plugins
you need based on your supported environments. Uses compat-table.<br/>
  [Option](https://babeljs.io/docs/plugins/preset-env#optionsmodules): Do not transform modules by setting
  `"modules": false`
- [React preset](https://babeljs.io/docs/plugins/preset-react): Strip flow types and transform JSX into createElement
calls.
- [Stage-0 preset](https://babeljs.io/docs/plugins/preset-stage-0) includes:
  - all stages from the [TC39 Process](https://tc39.github.io/process-document) (newest ES stuff that will possibly be
  included into ECMAScript)
  - [transform-do-expressions](https://babeljs.io/docs/plugins/transform-do-expressions): Compile `do` expressions to
  ES5
  - [transform-function-bind](https://babeljs.io/docs/plugins/transform-function-bind): Compile the new function bind
  operator `::` to ES5.

### Env

You can use the `env` option to set specific options when in a certain environment as documentet
[here](https://babeljs.io/docs/usage/babelrc/#env-option).

- **Production**
  - [transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types):
  Remove unnecessary React `propTypes` from the production build to save bandwith.
  - [transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements): Treat React
  JSX elements as value types and hoist them to the highest scope to improve runtime performance.
  - [transform-react-inline-elements](https://babeljs.io/docs/plugins/transform-react-inline-elements): Replaces the
  `React.createElement` function with babelHelpers.jsx.

- **Test**
  - [transform-es2015-modules-commonjs](https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs): This plugin
  transforms ES2015 modules to CommonJS.
  - [dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node): Babel plugin to transpile
  `import()` to a deferred `require()`, for node. Matches the
  [proposed spec](https://github.com/domenic/proposal-import-function).

## Webpack

[webpack](https://webpack.js.org): Webpack is used to compile JavaScript modules.

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): Simplifies creation of HTML files to serve
your webpack bundles


## To be eventually added

- DLLs https://webpack.js.org/plugins/dll-plugin<br/>
The `DllPlugin` and `DllReferencePlugin` provide means to split bundles in a way that can drastically improve build time
performance.

- [react-hot-loader](https://github.com/gaearon/react-hot-loader): Tweak React components in real time.
http://gaearon.github.io/react-hot-loader

- [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin): Detect circular dependencies
in modules compiled with Webpack.

- [coveralls](https://github.com/nickmerwin/node-coveralls): Get the great coverage reporting of coveralls.io and add a
cool coverage button.

- [eventsource-polyfill](https://github.com/Yaffle/EventSource): a polyfill for http://www.w3.org/TR/eventsource

- [exports-loader](https://github.com/webpack-contrib/exports-loader): Exports variables from inside the file by
appending `exports[...] = ...` statements..

- [imports-loader](https://github.com/webpack-contrib/imports-loader): The imports loader allows you to use modules that
depend on specific global variables.

- [ngrock](https://github.com/inconshreveable/ngrok): ngrok is a reverse proxy that creates a secure tunnel from a
public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later
inspection and replay.

- [node-plop](https://github.com/amwmedia/node-plop): programmatic plopping for fun and profit http://plopjs.com

- [offline-plugin](https://github.com/NekR/offline-plugin): Offline plugin (ServiceWorker, AppCache) for webpack

- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware): An `express-style` development middleware
for use with `webpack` bundles and allows for serving of the files emitted from webpack.

- [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware): Webpack hot reloading using only
`webpack-dev-middleware`. This allows you to add hot reloading into an existing server without `webpack-dev-server`.

- [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin): Add a `JavaScript` or `CSS`
asset to the HTML generated by `html-webpack-plugin`

- [autoprefixer](https://github.com/postcss/autoprefixer): Parse CSS and add vendor prefixes to rules by Can I Use
https://twitter.com/autoprefixer

- [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin): webpack plugin for generating asset
manifests

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch): window.fetch polyfill for older browsers

## Other interesting stuff

- [null-loader](https://github.com/webpack-contrib/null-loader): A loader that returns an empty module.

- [rimraf](https://github.com/isaacs/rimraf): A `rm -rf` util for nodejs

- [shelljs](https://github.com/shelljs/shelljs): 🐚 Portable Unix shell commands for Node.js http://shelljs.org
