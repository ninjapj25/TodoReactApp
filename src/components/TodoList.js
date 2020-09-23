import React, { useContext, useState } from "react";
import { TodosContext } from "./Providers/TodosProvider";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useContext(TodosContext);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        title: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  console.log(status);

  const filteredTodos = () =>
    todos.filter((todo) => {
      if (status === "complete") {
        return todo.completed === true;
      } else if (status === "incomplete") {
        return todo.completed === false;
      } else {
        return todo;
      }
    });

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="center-align">
      <button
        className="btn blue lighten-1 filter waves-effect waves-light"
        value="incomplete"
        onClick={handleStatusChange}
      >
        Incomplete
      </button>
      <button
        className="btn blue lighten-1 filter waves-effect waves-light"
        value="complete"
        onClick={handleStatusChange}
      >
        Complete
      </button>
      <button
        className="btn blue lighten-1 filter waves-effect waves-light"
        value="all"
        onClick={handleStatusChange}
      >
        All
      </button>

      <Todo filteredTodos={filteredTodos} setStatus={setStatus} />

      <form action="#" onSubmit={handleSubmit}>
        <div className="input-field col s6 add">
          <input
            placeholder="Add Todo"
            type="text"
            className="validate center pink-font input-style"
            autoComplete="false"
            value={inputText}
            onChange={handleChange}
          />
          <div className="center-align">
            <button className="waves-effect waves-light btn-large blue lighten-1">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
