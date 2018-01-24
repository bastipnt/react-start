import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export const Main = styled.main`

`;

const App = () => (
  <Main>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="" component={NotFound} />
    </Switch>
    <Footer />
  </Main>
);

export default App;
