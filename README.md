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


## Locales


## Deployment


## Testing

For testing we use [Jest](https://facebook.github.io/jest): Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated `zero-configuration` experience.

## Linting

- Lint your code before commiting with [lint-staged](https://github.com/okonet/lint-staged)<br>
  for git hooks we use [pre-commit](https://github.com/observing/pre-commit)
- **Configuration:**
  - Parser: [babel-eslint](https://github.com/babel/babel-eslint): Use for [Flow](https://github.com/facebook/flow) and other experimantal features, that are not supportet by the [default parser](https://github.com/eslint/espree).
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb): This package provides Airbnb's .eslintrc as an extensible shared config.
  - Env: Specify supportet platfroms
  - Plugins:
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): Adds linting rules for react
    - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y): Static AST checker for [accessibility rules](https://github.com/reactjs/react-a11y) on JSX elements.
  - Parser Options: Specify the JavaScript language options you want to support as explained [here](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  - Rules: Overwrite default rules.
  - Settings: Add [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), an ESLint plugin with rules that help validate proper imports.

## Babel

### Plugins
- [styled-components](https://www.styled-components.com/docs/tooling#babel-plugin): This plugin adds support for server-side rendering, for minification of styles and gives you a nicer debugging experience.

### Presets
- [Env preset](https://babeljs.io/docs/plugins/preset-env): Babel preset that automatically determines the Babel plugins you need based on your supported environments. Uses compat-table.<br/>
  [Option](https://babeljs.io/docs/plugins/preset-env#optionsmodules): Do not transform modules by setting `"modules": false`
- [React preset](https://babeljs.io/docs/plugins/preset-react): Strip flow types and transform JSX into createElement calls.
- [Stage-0 preset](https://babeljs.io/docs/plugins/preset-stage-0) includes:
  - all stages from the [TC39 Process](https://tc39.github.io/process-document) (newest ES stuff that will possibly be included into ECMAScript)
  - [transform-do-expressions](https://babeljs.io/docs/plugins/transform-do-expressions): Compile `do` expressions to ES5
  - [transform-function-bind](https://babeljs.io/docs/plugins/transform-function-bind): Compile the new function bind operator `::` to ES5.

### Env

You can use the `env` option to set specific options when in a certain environment as documentet [here](https://babeljs.io/docs/usage/babelrc/#env-option).

- **Production**
  - [transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types): Remove unnecessary React `propTypes` from the production build to save bandwith.
  - [transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements): Treat React JSX elements as value types and hoist them to the highest scope to improve runtime performance.
  - [transform-react-inline-elements](https://babeljs.io/docs/plugins/transform-react-inline-elements): Replaces the React.createElement function with babelHelpers.jsx.

- **Test**
  - [transform-es2015-modules-commonjs](https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs): This plugin transforms ES2015 modules to CommonJS.
  - [dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node): Babel plugin to transpile `import()` to a deferred `require()`, for node. Matches the [proposed spec](https://github.com/domenic/proposal-import-function).

## Webpack


## To be added

- DLLs https://webpack.js.org/plugins/dll-plugin<br/>
The `DllPlugin` and `DllReferencePlugin` provide means to split bundles in a way that can drastically improve build time performance.

- [react-hot-loader](https://github.com/gaearon/react-hot-loader): Tweak React components in real time. http://gaearon.github.io/react-hot-loader

- [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin): Detect circular dependencies in modules compiled with Webpack.

- [coveralls](https://github.com/nickmerwin/node-coveralls): Get the great coverage reporting of coveralls.io and add a cool coverage button.

-
