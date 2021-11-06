import React from "react";
import { TodoItem, TodosProps } from "../structure";
interface TotoItemProps {
  todo: TodoItem;
  onToggle: Function;
  onRemove: Function;
}
const TotoItem = ({ todo, onToggle, onRemove }: TotoItemProps) => {
  return (
    <div>
      <input type="checkbox" />
      <span>에제 택스트</span>
      <button>삭제</button>
    </div>
  );
};
const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: TodosProps) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form></form>
    </div>
  );
};

export default Todos;
