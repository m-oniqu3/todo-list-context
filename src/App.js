import React from "react";
import Form from "./components/Form";
import TodoContextsProvider from "./contexts/TodoContexts";

function App() {
  return (
    <div>
      <TodoContextsProvider>
        <Form />
      </TodoContextsProvider>
    </div>
  );
}

export default App;
