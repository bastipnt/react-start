import React from 'react';
import { shallow } from 'enzyme';

import { TLEdit, TLShow, Checkbox, Button } from 'styles';
import ToDo from '../src/components/ToDo';
import toDoStore from '../src/stores/toDoStore';

const text = 'Test';
let component;

describe('<ToDo />', () => {
  describe('content', () => {
    beforeEach(() => {
      toDoStore.createToDo(text);
      const props = { toDo: toDoStore.toDos[0], deleteToDo: toDoStore.deleteToDo };
      component = shallow(<ToDo {...props} />);
    });

    afterEach(() => {
      toDoStore.toDos = [];
    });

    it('renders correctly', () => {
      expect(component.getElements()).toMatchSnapshot();
      expect(component.find(TLShow).dive().text()).toEqual(text);
    });

    it('shows an input field on doubleclick', () => {
      component.find(TLShow).simulate('doubleclick');
      expect(component.find(TLEdit).length).toBe(1);
    });

    it('removes the input field on blur', () => {
      component.find(TLShow).simulate('doubleclick');
      expect(component.find(TLEdit).length).toBe(1);
      component.find(TLEdit).simulate('blur');
      expect(component.find(TLEdit).length).toBe(0);
    });

    it('sets the toDo to done when clicking the checkbox', () => {
      expect(toDoStore.toDos[0].completed).toEqual(false);
      component.find(Checkbox).simulate('change', { target: { checked: true } });
      expect(toDoStore.toDos[0].completed).toEqual(true);
    });

    it('changes the text in edit mode when clicking "Enter"', () => {
      const textNew = 'TestNew';
      component.find(TLShow).simulate('doubleclick');
      component.find(TLEdit).simulate('keyPress', { key: 'Enter', currentTarget: { value: textNew } });
      expect(toDoStore.toDos[0].text).toEqual(textNew);
    });

    it('doesn`t change the text in edit mode when clicking any other key', () => {
      const textNew = 'TestNew';
      component.find(TLShow).simulate('doubleclick');
      component.find(TLEdit).simulate('keyPress', { key: 'A', currentTarget: { value: textNew } });
      expect(toDoStore.toDos[0].text).toEqual(text);
    });

    it('deletes the toDo when clicking the delete button', () => {
      component.find(Button).simulate('click');
      expect(toDoStore.toDos.length).toBe(0);
    });
  });
});
