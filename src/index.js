/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import { BrowserRouter as Router } from 'react-router-dom';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './App';

// Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/first */
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./assets/images/favicon.ico';
import '!file-loader?name=[name].[ext]!./assets/images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-120x120.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-167x167.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-180x180.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./assets/images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/first */
/* eslint-enable import/no-unresolved */

// Import CSS reset and Global Styles
import './global-styles';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
