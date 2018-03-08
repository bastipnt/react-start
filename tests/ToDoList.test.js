import React from 'react';
import { shallow } from 'enzyme';

import {
  TLDate,
  TLMonth,
  Input,
  TLNew,
} from 'styles';
import { mockDate } from '../config/mocks/date.mock';
import ToDoList from '../src/components/ToDoList';
import ToDo from '../src/components/ToDo';
import toDoStore from '../src/stores/toDoStore';

let component;

describe('<ToDoList />', () => {
  describe('content', () => {
    beforeAll(() => {
      mockDate('2017-10-20T00:00:00');
      component = shallow(<ToDoList.wrappedComponent toDoStore={toDoStore} />);
    });

    it('renders correctly', () => {
      expect(component.getElements()).toMatchSnapshot();
    });

    it('should show todays date', () => {
      expect(component.find(TLDate).dive().text()).toBe('Friday, 20th');
      expect(component.find(TLMonth).dive().text()).toBe('October');
    });
  });

  describe('actions', () => {
    beforeEach(() => {
      component = shallow(<ToDoList.wrappedComponent toDoStore={toDoStore} />);
    });

    afterEach(() => {
      toDoStore.toDos = [];
    });

    it('should not add a toDo when the input is empty', () => {
      component.find(TLNew).find(Input).simulate('keyPress', { key: 'Enter', currentTarget: { value: '' } });
      expect(toDoStore.toDos.length).toBe(0);
    });

    it('should not add a toDo when the key pressed is not "Enter"', () => {
      const text = 'Test';
      component.find(TLNew).find(Input).simulate('keyPress', { key: 'A', currentTarget: { value: text } });
      expect(toDoStore.toDos.length).toBe(0);
    });

    it('should add a toDo when the input filled', () => {
      const text = 'Test';
      component.find(TLNew).find(Input).simulate('keyPress', { key: 'Enter', currentTarget: { value: text } });
      expect(toDoStore.toDos.length).toBe(1);
      expect(toDoStore.toDos[0].text).toEqual(text);
      expect(component.find(ToDo).length).toBe(1);
    });

    it('should sort the ToDos in the correct order', () => {
      const text1 = 'Test1';
      const text2 = 'Test2';
      toDoStore.createToDo(text1);
      toDoStore.createToDo(text2);
      component = shallow(<ToDoList.wrappedComponent toDoStore={toDoStore} />);
      expect(component.find(ToDo).length).toBe(2);
      expect(component.find(ToDo).map((toDo) => toDo.render().find('p').text())).toEqual([text1, text2]);
      toDoStore.toDos = [];
      toDoStore.createToDo(text1);
      toDoStore.createToDo(text2);
      toDoStore.toDos[0].completed = true;
      component = shallow(<ToDoList.wrappedComponent toDoStore={toDoStore} />);
      expect(component.find(ToDo).map((toDo) => toDo.render().find('p').text())).toEqual([text2, text1]);
    });
  });
});
