import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../src/App';
import Header from '../src/components/Header';

let component;

describe('<App />', () => {
  beforeAll(() => {
    component = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('should render the header', () => {
    expect(component.find(Header).length).toBe(1);
  });

  it('should render some routes', () => {
    expect(component.find(Route).length).not.toBe(0);
  });
});
