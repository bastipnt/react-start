import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../src/components/NotFound';

describe('<NotFound />', () => {
  it('should render the not found page', () => {
    const renderedNotFound = shallow(<NotFound />);
    expect(renderedNotFound.length).toBe(1);
  });
});
