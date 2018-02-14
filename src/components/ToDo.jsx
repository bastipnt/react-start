// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { TLItem, TLEdit, TLShow, Checkbox, Button } from 'styles';

type Props = {
  toDo: TODO,
  deleteToDo: (toDo: TODO) => void,
}

@observer
class ToDo extends Component<Props> {
  handleDoubleClick = (): void => this.props.toDo.edit()

  handleKeyPress = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { toDo } = this.props;
    const target = e.currentTarget;
    if (e.key === 'Enter') {
      toDo.change(target.value);
      target.value = '';
    }
  }

  handleBlur = (): void => {
    const { toDo } = this.props;
    toDo.cancelEdit();
  }

  handleCheckboxChange = (): void => {
    const { toDo } = this.props;
    toDo.toggleCompleted();
  }

  handleDeleteClick = (): void => {
    const { deleteToDo, toDo } = this.props;
    deleteToDo(toDo);
  }

  render = () => {
    const { text, inEdit, completed } = this.props.toDo;

    const editMode = (
      <TLEdit
        defaultValue={text}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
        autoFocus
      />
    );

    const showMode = <TLShow onDoubleClick={this.handleDoubleClick}>{text}</TLShow>;

    return (
      <TLItem completed={completed}>
        <Checkbox
          key="checkbox"
          onChange={this.handleCheckboxChange}
          checked={completed}
        />
        {inEdit ? editMode : showMode}
        <Button key="delete" onClick={this.handleDeleteClick}>
          <i className="fa fa-times" />
        </Button>
      </TLItem>
    );
  }
}

export default ToDo;
