import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TodoContextsProvider from "./contexts/TodoContexts";

function App() {
  return (
    <div>
      {/* Wrap components with the context provider so hey can have access to the state  */}
      <TodoContextsProvider>
        <Form />
        <TodoList />
      </TodoContextsProvider>
    </div>
  );
}

export default App;
