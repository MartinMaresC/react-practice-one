import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add To do</button>
    <button>Clear Completed To dos</button>
    <div>0 left to do list</div>
    </>
  )
}

export default App;
