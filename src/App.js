import React from "react";
import Form from "./components/Form";
import TodoContextsProvider from "./contexts/TodoContexts";

function App() {
  return (
    <div>
      {/* Wrap components with the context provider so hey can have access to the state  */}
      <TodoContextsProvider>
        <Form />
      </TodoContextsProvider>
    </div>
  );
}

export default App;
