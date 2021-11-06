import { TodoItem, TodoList } from "../structure";

/* 엑션 타입 정의 */
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

/* id 값 */
let id = 3;

/* 엑션 크리에이터 */
type ChangeInput = (input: string) => { type: string; input: string };
export const changeInput: ChangeInput = (input: string) => ({
  type: CHANGE_INPUT,
  input,
});

type Insert = (text: string) => { type: string; todo: TodoItem };
export const insert: Insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

type Toggle = (id: number) => { type: string; id: number };
export const toggle: Toggle = (id) => ({
  type: TOGGLE,
  id,
});

type Remove = (id: number) => { type: string; id: number };
export const remove: Remove = (id) => ({
  type: REMOVE,
  id,
});

/* 초기값 */
type InitalState = {
  input: string;
  todos: TodoList;
};
const initalState: InitalState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 훈련중",
      done: true,
    },
    {
      id: 2,
      text: "리덕스 단련중",
      done: false,
    },
  ],
};

/* 리듀서 */
function todos(state = initalState, action: { [property: string]: any }) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };

    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
}

export default todos;
