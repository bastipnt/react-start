// @flow
import React, { Component } from 'react';
import type { Element } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Page,
  Input,
  TLHeader,
  TLNew,
  TLList,
  TLDate,
  TLMonth,
  TLCount,
  TLWrapper,
} from 'styles';

import ToDo from './ToDo';
import { toDay, toWeekDay, toMonth } from '../utils/dateFormat';

type Props = {
  toDoStore: TODOSTORE,
};

@inject('toDoStore')
@observer
class ToDoList extends Component<Props> {
  handleKeyPress = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { toDoStore } = this.props;
    const target = e.currentTarget;
    if (e.key === 'Enter') {
      toDoStore.createToDo(target.value);
      target.value = '';
    }
  };

  toDos = (): Element<typeof ToDo>[] =>
    this.props.toDoStore.toDos.sort((a) => a.completed ? 1 : -1).map((toDo) =>
      <ToDo key={toDo.createdAt} toDo={toDo} deleteToDo={this.props.toDoStore.deleteToDo} />)

  render = () => {
    const now = new Date();
    return (
      <Page>
        <TLWrapper>
          <TLHeader>
            <TLDate><b>{toWeekDay(now)}</b>, {toDay(now)}th</TLDate>
            <TLMonth>{toMonth(now)}</TLMonth>
            <TLCount><b>{this.props.toDoStore.toDos.length}</b> Tasks</TLCount>
          </TLHeader>
          <TLNew>
            <Input
              id="new-todo"
              onKeyPress={this.handleKeyPress}
              placeholder="Add new task!"
              autoFocus
            />
          </TLNew>
          <TLList>
            {this.toDos()}
          </TLList>
        </TLWrapper>
      </Page>
    );
  }
}

export default ToDoList;
