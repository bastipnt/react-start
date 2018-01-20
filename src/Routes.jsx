import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h2> haha ich bin eine route </h2>;

const Routes = () => (
  <Route exact path="/" component={Home} />
);

export default Routes;
