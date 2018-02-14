// @flow
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { I18nextProvider } from 'react-i18next';
import { Main } from 'styles';

import i18n from './i18n'; // initialized i18next instance
import Header from './components/Header';
import NotFound from './components/NotFound';
import routes from './routes';
import toDoStore from './stores/toDoStore';

const stores = { toDoStore };

const App = () => (
  <Provider {...stores}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Main>
          <Header />
          <Switch>
            {routes.map(({
              exact, key, component, path,
            }: ROUTE) => (
              <Route
                exact={exact}
                key={key}
                path={path}
                component={component}
              />
            ))}
            <Route path="" key="notFound" component={NotFound} />
          </Switch>
        </Main>
      </Router>
    </I18nextProvider>
  </Provider>
);

export default App;
