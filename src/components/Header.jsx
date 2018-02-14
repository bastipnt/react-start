import React from 'react';
import { Route, Link } from 'react-router-dom';
import { HeaderBar, HeaderTitle, HeaderLink } from 'styles';
import routes from '../routes';

const DefaultHeader = () => (
  <HeaderBar>
    <HeaderTitle>Welcome to React Start</HeaderTitle>
    <HeaderLink><Link to="/todo" href="/todo" label="ToDo">ToDo Example</Link></HeaderLink>
  </HeaderBar>
);

const Header = () => routes.map(({
  exact, key, header = DefaultHeader, path,
}: ROUTE) => (
  <Route
    exact={exact}
    key={key}
    path={path}
    component={header}
  />
));

export default Header;
