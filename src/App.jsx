import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => <h2> haha sdfad ich bin eine route yay </h2>;
const About = () => <h2> ich bin eine zweite lool route </h2>;

const Main = (props) => <div>{props.children}</div>;

Main.propTypes = {
  children: PropTypes.array,
};

const App = () => (
  <Main>
    <h1> Looool jay </h1>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Main>
);

export default App;
