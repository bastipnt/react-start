import React from 'react';
import { shallow } from 'enzyme';
import { HeaderTitle } from 'styles';
import { Link, Route } from 'react-router-dom';

import Header, { DefaultHeader } from '../src/components/Header';

let component;

describe('<Header />', () => {
  beforeAll(() => { component = shallow(<Header />); });

  it('should render the header', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('should render some routes', () => {
    expect(component.find(Route).length).not.toBe(0);
  });
});

describe('default <Header />', () => {
  beforeAll(() => { component = shallow(<DefaultHeader />); });

  it('should render the default header', () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it('should render a title', () => {
    expect(component.find(HeaderTitle).length).toBe(1);
  });

  it('should render a link to the toDo example', () => {
    expect(component.find(Link).length).toBe(1);
    expect(component.find(Link).prop('to')).toEqual('/todo');
  });
});
