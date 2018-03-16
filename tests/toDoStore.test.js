import toDoStore from '../src/stores/toDoStore';
import { mockDate } from '../config/mocks/date.mock';

const text = 'test';
let toDo;
let date;

describe('toDoStore', () => {
  beforeAll(() => {
    date = mockDate('2017-10-20T00:00:00');
    toDoStore.createToDo(text);
  });

  it('provides an observable list of toDos', () => {
    expect(toDoStore.toDos.constructor.name).toEqual('ObservableArray');
  });

  it('assures, that every member of the list is a toDo', () => {
    expect(toDoStore.toDos[0].constructor.name).toEqual('ToDo');
  });

  it('has methods for creating and deleting toDos', () => {
    toDoStore.createToDo(text);
    expect(toDoStore.toDos.length).toBe(2);
    toDoStore.deleteToDo(toDoStore.toDos[1]);
    expect(toDoStore.toDos.length).toBe(1);
  });

  describe('ToDo', () => {
    beforeAll(() => {
      [toDo] = toDoStore.toDos;
    });

    it('has the correct values', () => {
      expect(toDo.text).toEqual(text);
      expect(toDo.inEdit).toBe(false);
      expect(toDo.completed).toBe(false);
      expect(toDo.createdAt).toEqual(date);
      expect(toDo.changedAt).toBe(undefined);
    });

    it('sets the correct values on changing', () => {
      const newText = 'test new';
      toDo.change(newText);
      expect(toDo.text).toEqual(newText);
      expect(toDo.changedAt).toEqual(date);
    });

    it('sets inEdit when editing is starting', () => {
      toDo.edit();
      expect(toDo.inEdit).toBe(true);
    });

    it('sets inEdit false when editing is canceled', () => {
      toDo.cancelEdit();
      expect(toDo.inEdit).toBe(false);
    });

    it('toggles completed correctly', () => {
      toDo.toggleCompleted();
      expect(toDo.completed).toBe(true);
      toDo.toggleCompleted();
      expect(toDo.completed).toBe(false);
    });
  });
});
