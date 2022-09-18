import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const dummyData = [
  {
    id: 1,
    text: "Go workout",
    todo_completed: false
  },
  {
    id: 2,
    text: "Read",
    todo_completed: false
  },
  {
    id: 3,
    text: "Floss",
    todo_completed: false
  },
  {
    id: 4,
    text: "Eat some yummy food",
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
