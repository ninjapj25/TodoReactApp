import React from "react";

import TodoList from "./components/TodoList";
import { TodosProvider } from "./components/Providers/TodosProvider";

function App() {
  return (
    <TodosProvider>
      <div className="App container">
        <header className="center">
          <h1> PJ's Todo </h1>
        </header>

        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;
