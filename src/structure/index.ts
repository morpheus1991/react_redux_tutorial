export interface ITodoItem {
  id: string | number;
  text: string;
  done: boolean;
}

export type TodoList = ITodoItem[];

export interface TodosProps {
  input: string;
  todos: TodoList;
  changeInput: Function;
  insert: Function;
  toggle: Function;
  remove: Function;
}
