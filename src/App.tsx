import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
