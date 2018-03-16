import React from 'react';
import { shallow } from 'enzyme';

import Home from '../src/components/Home';
import Markdown from '../src/components/Markdown';
import MARKDOWN_MOCK from '../config/mocks/md.mock';

let renderedHome;

describe('<Home />', () => {
  beforeAll(() => {
    renderedHome = shallow(<Home />);
  });

  it('should render the home component', () => {
    expect(renderedHome.length).toBe(1);
  });

  it('should render <Markdown />', () => {
    expect(renderedHome.find(Markdown).length).toBe(1);
  });

  it('should print the md text', () => {
    expect(renderedHome.find(Markdown).find(MARKDOWN_MOCK));
  });
});
