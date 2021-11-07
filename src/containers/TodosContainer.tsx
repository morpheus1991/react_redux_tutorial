import React from "react";
import Todos from "../components/Todos";
import { ITodoItem, TodoList, TodosProps } from "../structure";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import { connect } from "react-redux";
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: TodosProps) => {
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        changeInput={changeInput}
        insert={insert}
        toggle={toggle}
        remove={remove}
      ></Todos>
    </div>
  );
};

export default connect(
  (state: { todos: { input: string; todos: TodoList } }) => {
    return {
      input: state.todos.input,
      todos: state.todos.todos,
    };
  },
  { changeInput, insert, toggle, remove }
)(TodosContainer);
