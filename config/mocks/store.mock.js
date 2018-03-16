import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';

const MockProvider = ({ children, store = {} }) => (
  <Provider {...store}>{children}</Provider>
);

MockProvider.propTypes = {
  children: PropTypes.object,
  store: PropTypes.object,
};

export default MockProvider;
