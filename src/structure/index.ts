export interface TodoItem {
  id: string | number;
  text: string;
  done: boolean;
}

export type TodoList = TodoItem[];

export interface TodosProps {
  input: string;
  todos: TodoList;
  onChangeInput: Function;
  onInsert: Function;
  onToggle: Function;
  onRemove: Function;
}
