import React, {useState, useEffect} from "react";
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
    todo_id: 3,
    todo_text: "Floss",
    todo_completed: false
  },
  {
    todo_id: 4,
    todo_text: "Eat some yummy food",
    todo_completed: false
  },
]


function App() {
  const [todoData, setTodoData] = useState(dummyData);

  useEffect(() => {
    localStorage.setItem('react-todo-list-todos', JSON.stringify(todoData));
  }, [todoData])

  const addTodo = todo => {
    setTodoData([todo, ...todoData])
  }

  return (
    <div className="App" style = {{ backgroundColor: 'grey' }}>
      <h1>What should we get done?</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList stuffTodo={todoData} />
    </div>
  );
}

export default App;
