<!--
Title:    React Start
Date:     25.01.2018
Author:   Sebastian Paintner
Keywords: react, mobx, frontend, web, hmr
-->

# Easy start with react

## About
Boilerplate for an easy start with react apps.

Created with ❤️ by [Basti Paintner](https://twitter.com/lItc0de).

Inspiration and many ideas taken from
[react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) and
[create-react-app](https://github.com/facebook/create-react-app). Thx a lot!

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn build](#yarn-build)
  - [yarn serve](#yarn-serve)
  - [yarn prod](#yarn-prod)
  - [yarn test](#yarn-test)
  - [yarn coverage](#yarn-coverage)
  - [yarn watch](#yarn-watch)
  - [yarn build:dll](#yarn-build-dll)
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
- [Used third party software](#used-third-party-software)
- [To be eventually added](#to-be-eventually-added)
- [Other interesting stuff](#other-interesting-stuff)

## Features

**Routing**

Client side routing out of the box with [react-router](https://github.com/ReactTraining/react-router).

**Styling**

Awesome component based styling with
[styled-components](https://github.com/styled-components/styled-components).

**Hot Module Replacement (HMR)**

Save your work and have the page automatically rerendered without reloading!<br/>
-> Instantly see your changes with [react-hot-loader](https://github.com/gaearon/react-hot-loader).

**Lastest JavaScript features**

i.e. template strings, arrow functions, JSX syntax...

**Linting**

No commit without being lintet, to assure code quality and best practices.

**Bulletproof test setup**

Run Jest tests before each build! It's not possible to deploy with failing tests.

## Getting started
- Clone this repo: `git clone https://github.com/lItc0de/react-start.git`
- Get inside: `cd react-start`
- Install dependencies using [yarn](https://yarnpkg.com/lang/en/docs/install/): `yarn install`
- Run that thing on http://localhost:3000 with: `yarn start`

-> Now you are good to go and build your awsome project!

## Folder Structure

`/`  
&nbsp;&nbsp;&nbsp;&nbsp;
`build/` all your production ready compiled files  
&nbsp;&nbsp;&nbsp;&nbsp;
`src/` all your source files  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`assets/` images, videos, icons, fonts, ...  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`components/` all your components and component styles  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`styles/` all the reusable styles, shared throughout your components  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`App.jsx` your main component  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`globalStyles.js` in here you could set the font or other things, that should apply to the whole app  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`index.html` in here your app gets injected  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`index.js` this file injects your app in the index.html file and loads other dependencies  
&nbsp;&nbsp;&nbsp;&nbsp;
`tests/` in here you can write your tests


## Available Scripts

### `yarn start`

Starts the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will rerender if you make changes.

### `yarn build`

compiles your app for production use<br/>
you can find it then in the `build` folder

### `yarn serve`

starts an express server, that serves your production compiled app from the build folder

## `yarn prod`

does the two above steps: first builds the app, then serves it

### `yarn test`

runs your jest tests

### `yarn coverage`

runs your jest tests and prints coverage report

### `yarn watch`

runs your jest tests in watch mode

<h3 id="yarn-build-dll"><code>yarn build:dll</code></h3>

builds a DLL file for improving compile time in development (https://webpack.js.org/plugins/dll-plugin)

## Routing

This setup uses the [react-router](https://github.com/ReactTraining/react-router)
from reacttraining.com  
For mor information please visit their [website](reacttraining.com/react-router)

## Styling

You can style your components with [styled-components](https://github.com/styled-components/styled-components)  
With this you can write real `CSS` in `JavaScript`!  
Please check their [website](https://www.styled-components.com/) for further information

## Locales

For internationalisation we will use either:

[react-intl](https://github.com/yahoo/react-intl) or
[react-i18next](https://github.com/i18next/react-i18next)

## Testing

For testing we use [Jest](https://facebook.github.io/jest): Jest is used by Facebook to test all JavaScript code
including React applications. One of Jest's philosophies is to provide an integrated `zero-configuration` experience.


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

## Used third party software

- [react-helmet](https://github.com/nfl/react-helmet): A document head manager for React

- [react-loadable](https://github.com/thejameskyle/react-loadable): ⏳ A higher order component for loading components
with promises.

- [chalk](https://github.com/chalk/chalk): 🖍 Terminal string styling done right.

- [ip](https://github.com/indutny/node-ip): IP address utilities for node.js

- [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin): Detect circular dependencies
in modules compiled with Webpack.

- [eventsource-polyfill](https://github.com/Yaffle/EventSource): a polyfill for http://www.w3.org/TR/eventsource

- [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin): Add a `JavaScript` or `CSS`
asset to the HTML generated by `html-webpack-plugin`

- [cross-env](https://github.com/kentcdodds/cross-env): 🔀 Cross platform setting of environment scripts

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch): window.fetch polyfill for older browsers

- [react-dev-utils](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-dev-utils): This
package includes some utilities used by [Create React App](https://github.com/facebookincubator/create-react-app).

- [exports-loader](https://github.com/webpack-contrib/exports-loader): Exports variables from inside the file by
appending `exports[...] = ...` statements..

