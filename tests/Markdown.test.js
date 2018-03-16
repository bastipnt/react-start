import React from 'react';
import { shallow, render } from 'enzyme';

import Markdown from '../src/components/Markdown';

const html = '<div><span class="test">Test<span/><div/>';

describe('<Markdown />', () => {
  it('should render without throwing an error', () => {
    const renderedComponent = shallow(<Markdown html={html} />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should not escape the html and find the class .test', () => {
    const renderedComponent = render(<Markdown html={html} />);
    expect(renderedComponent.find('.test').length).toBe(1);
  });

  it('should render the correct Text', () => {
    const renderedComponent = render(<Markdown html={html} />);
    expect(renderedComponent.text()).toEqual('Test');
  });
});
