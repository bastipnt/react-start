import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/components/Header';

describe('<Header />', () => {
  it('should render the header', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader.length).toBe(1);
  });
});
