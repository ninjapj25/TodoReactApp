import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Study React",
      completed: false,
    },
    {
      id: 2,
      title: "Study Python",
      completed: false,
    },
  ]);
  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
