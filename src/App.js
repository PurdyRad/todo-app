import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const dummyData = [
  {
    todo_id: 1,
    todo_text: "Go workout",
    todo_completed: false
  },
  {
    todo_id: 2,
    todo_text: "Read",
    todo_completed: false
  },
  {
    todo_id: 1,
    todo_text: "Floss",
    todo_completed: false
  },
  {
    todo_id: 1,
    todo_text: "Eat some yummy food",
    todo_completed: false
  },
]


function App() {
  const [todoData, setTodoData] = useState(dummyData);

  return (
    <div className="App">
      <h1>What should we get done?</h1>
      <TodoForm />
      <TodoList stuffTodo={todoData} />
    </div>
  );
}

export default App;
