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
  - [yarn test:debug](#yarn-test-debug)
  - [yarn coverage](#yarn-coverage)
  - [yarn watch](#yarn-watch)
  - [yarn build:dll](#yarn-build-dll)
  - [yarn storybook](#yarn-storybook)
  - [yarn postinstall](#yarn-postinstall)
- [Routing](#routing)
- [Styling](#styling)
- [Localisation](#localisation)
- [Testing](#testing)
- [Linting](#linting)
- [Babel](#babel)
  - [Plugins](#plugins)
  - [Presets](#presets)
  - [Env](#env)

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

**Storybook**

Document your components with [storybook](https://storybook.js.org/) to keep track of your styles and
to make ist easier working in a team.

## Getting started
- Clone this repo: `git clone https://github.com/lItc0de/react-start.git`
- Get inside: `cd react-start`
- Install dependencies using [yarn](https://yarnpkg.com/lang/en/docs/install/): `yarn install`
- Run that thing on http://localhost:3000 with: `yarn start`
- Feel free to check out the example project, that is included

-> Now you are good to go and build your awsome project!  
_just delete the example files ;D_

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
`locales/` for your language files  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`stores/` place for mobx stores  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`styles/` all the reusable styles, shared throughout your components  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`utils/` put your reused functions in here  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`App.jsx` your main component  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`i18n.js` config file for localisation  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`index.html` in here your app gets injected  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`index.js` this file injects your app in the index.html file and loads other dependencies  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`manifest.json` [web app manifest file](https://developer.mozilla.org/en-US/docs/Web/Manifest)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
`routes.jsx` define your routes in here  
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

### `yarn prod`
does the two above steps: first builds the app, then serves it

### `yarn test`
runs your jest tests

<h3 id="yarn-test-debug"><code>yarn test:debug</code></h3>
runs your jest tests in debug mode  
you can use [chrome](https://www.google.com/chrome/) to connect to the node server

### `yarn coverage`
runs your jest tests and prints coverage report

### `yarn watch`
runs your jest tests in watch mode  
_reruns tests on save_

<h3 id="yarn-build-dll"><code>yarn build:dll</code></h3>
builds a DLL file for improving compile time in development (https://webpack.js.org/plugins/dll-plugin)

### `yarn storybook`
starts the storybook server

### `yarn postinstall`
runs automatically after `yarn install` and builds your webpack DLL

## Routing

This setup uses the [react-router](https://github.com/ReactTraining/react-router)
from reacttraining.com  
For mor information please visit their [website](reacttraining.com/react-router)

## Styling

You can style your components with [styled-components](https://github.com/styled-components/styled-components)  
With this you can write real `CSS` in `JavaScript`!  
Please check their [website](https://www.styled-components.com/) for further information

## Localisation

This boilerplate has build in localisation support with
[react-i18next](https://github.com/i18next/react-i18next).  
Add your localisation files in `src/locales/`.  
You can configurate _i18next_ in `src/i18n.js`.

## Testing

For testing we use [Jest](https://facebook.github.io/jest): Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated `zero-configuration` experience.  
You can write your tests in `tests/` with the filename pattern `[component name].test.js`.  
For a better rendering experience of your react components the test setup includes [enzyme](http://airbnb.io/enzyme).  
The test setup file can be found in `config/setup.test.js`.

## Linting

- Lint your code before commiting with [lint-staged](https://github.com/okonet/lint-staged)  
  for git hooks [pre-commit](https://github.com/observing/pre-commit) is used
- **Configuration:**
  - **Parser**: [babel-eslint](https://github.com/babel/babel-eslint): Use for [Flow](https://github.com/facebook/flow) and
  other experimantal features, that are not supportet by the [default parser](https://github.com/eslint/espree).
  - **[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)**: This package
  provides Airbnb's .eslintrc as an extensible shared config.
  - **Env**: Specify supportet platfroms
  - **Plugins**:
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): Adds linting rules for react
    - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y): Static AST checker for
    [accessibility rules](https://github.com/reactjs/react-a11y) on JSX elements.
  - **Parser Options**: Specify the JavaScript language options you want to support as explained
  [here](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  - **Rules**: Overwrite default rules.
  - **Settings**: Add [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), an ESLint plugin with rules that help validate proper imports.

## Babel

### Plugins
- [styled-components](https://www.styled-components.com/docs/tooling#babel-plugin): This plugin adds support for server-side rendering, for minification of styles and gives you a nicer debugging experience.
- [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5.  
Allows us to work with decorators from mobx.

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

This documentation will be finished and improved over time. If you have some points, that shouldn't be missing in this doku, feel free to contact me. Also, if you have ideas improving this boilerplate, they are very welcome!  
Next steps are:  
- upgrade webpack to version 4
- finish the doku
- use the same webpack configuration for the app and storybook
- ...

