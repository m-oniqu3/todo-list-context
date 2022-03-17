import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/header/Header";
import TodoList from "./components/TodoList";
import TodoContextsProvider from "./contexts/TodoContexts";

function App() {
  return (
    <div>
      <Header />
      {/* Wrap components with the context provider so hey can have access to the state  */}
      <TodoContextsProvider>
        <section className="container">
          <Form />
          <TodoList />
        </section>
      </TodoContextsProvider>
    </div>
  );
}

export default App;
