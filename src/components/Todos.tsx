import React from "react";
import { ITodoItem, TodosProps } from "../structure";
interface TodoItemProps {
  todo: ITodoItem;
  onToggle: Function;
  onRemove: Function;
}
const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        에제 택스트
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};
const Todos = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: TodosProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    insert(input);
    changeInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            changeInput(e.target.value);
          }}
        />
        <button type="submit">등록</button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={toggle}
          onRemove={remove}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Todos;
