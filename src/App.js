import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo"
import TodoForm from "./Components/TodoForm"



function App() {
  const [todos, setTodos] = useState([
    { text: "task 1" },
    { text: "task 2" },
    { text: "task 3" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
  export default App;