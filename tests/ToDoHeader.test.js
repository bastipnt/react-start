import React from 'react';
import { shallow } from 'enzyme';

import ToDoHeader from '../src/components/ToDoHeader';

describe('<ToDoHeader />', () => {
  it('should render the element without throwing an error', () => {
    const renderedComponent = shallow(<ToDoHeader />);
    expect(renderedComponent.length).toBe(1);
  });
});
