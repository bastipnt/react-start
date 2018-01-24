import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../src/components/Footer';

describe('<Footer />', () => {
  it('should render the footer', () => {
    const renderedFooter = shallow(<Footer />);
    expect(renderedFooter.length).toBe(1);
  });
});
