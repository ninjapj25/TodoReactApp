import React, { useContext } from "react";
import { TodosContext } from "./Providers/TodosProvider";

export default function Todo({ filteredTodos, status }) {
  const [todos, setTodos] = useContext(TodosContext);

  const newTodos = () =>
    filteredTodos().map((filteredTodo) => {
      const deleteHandler = () => {
        setTodos(
          todos.filter(
            (el) => el.id !== filteredTodo.id,
            alert(`Deleted ${filteredTodo.title}`)
          )
        );
      };

      const handleComplete = (e) => {
        filteredTodo.completed = !filteredTodo.completed;
        if (filteredTodo.completed === true) {
          alert(filteredTodo.title + " moved to completed task");
          e.target.parentElement.classList.add("completed");
        } else {
          alert(filteredTodo.title + " moved to incomplete task");
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
