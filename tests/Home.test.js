import React from 'react';
import { shallow } from 'enzyme';

import Home from '../src/components/Home';

describe('<Home />', () => {
  it('should render the home component', () => {
    const renderedHome = shallow(<Home />);
    expect(renderedHome.length).toBe(1);
  });
});
