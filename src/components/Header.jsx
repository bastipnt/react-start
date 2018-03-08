import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { HeaderBar, HeaderTitle, HeaderLink } from 'styles';
import routes from '../routes';

export const DefaultHeader = () => (
  <HeaderBar>
    <HeaderTitle>Welcome to React Start</HeaderTitle>
    <HeaderLink><Link to="/todo" href="/todo" label="ToDo">ToDo Example</Link></HeaderLink>
  </HeaderBar>
);

const Header = () => (
  <Switch>
    {routes.map(({
      exact, key, header = DefaultHeader, path,
    }: ROUTE) => (
      <Route
        exact={exact}
        key={key}
        path={path}
        component={header}
      />
    ))}
  </Switch>
);

export default Header;
