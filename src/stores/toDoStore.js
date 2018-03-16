// @flow
import { observable } from 'mobx';

class ToDo implements TODO {
  @observable text;
  @observable inEdit;
  @observable completed;
  createdAt;
  changedAt;

  constructor(text: string) {
    this.text = text;
    this.createdAt = Date.now();
    this.inEdit = false;
    this.completed = false;
  }

  change = (text: string) => {
    this.text = text;
    this.changedAt = Date.now();
    this.inEdit = false;
    this.completed = false;
  }

  edit = () => { this.inEdit = true; }

  cancelEdit = () => { this.inEdit = false; }

  toggleCompleted = () => { this.completed = !this.completed; }
}

class ToDoStore implements TODOSTORE {
  @observable toDos = []

  createToDo = (text: string) => { if (text) this.toDos.push(new ToDo(text)); }

  deleteToDo = (toDo: TODO) => { this.toDos.remove(toDo); }
}

export default new ToDoStore();
