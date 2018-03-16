import type { IObservableArray } from 'mobx';

declare interface TODO {
  text: string;
  inEdit: boolean;
  completed: boolean;
  createdAt: number;
  changedAt?: number;
  change(text: string): void;
  edit(): void;
  cancelEdit(): void;
  toggleCompleted(): void;
}

declare interface TODOSTORE {
  toDos: IObservableArray<TODO>;
  createToDo(text: string): void;
  deleteToDo(toDo: TODO): void;
}
