import React, { useContext } from "react";
import { TodosContext } from "./Providers/TodosProvider";

export default function Todo({ filteredTodos, setStatus }) {
  const [todos, setTodos] = useContext(TodosContext);

  const newTodos = () =>
    filteredTodos().map((filteredTodo) => {
      const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== filteredTodo.id));
      };

      const handleComplete = (e) => {
        filteredTodo.completed = !filteredTodo.completed;
        if (filteredTodo.completed === true) {
          setStatus("complete");

          e.target.parentElement.classList.add("completed");
        } else {
          setStatus("incomplete");

          e.target.parentElement.classList.remove("completed");
        }
      };

      return (
        <div key={filteredTodo.id}>
          <p className="pink-font">
            <label className="pink-font">
              <span
                className={`pinkfont ${
                  filteredTodo.completed ? "completed" : ""
                }`}
                onClick={handleComplete}
              >
                {filteredTodo.title}
              </span>
              <i className="material-icons" onClick={deleteHandler}>
                delete
              </i>
            </label>
          </p>
        </div>
      );
    });

  return <div>{newTodos()} </div>;
}
