import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const dummyData = [
  {
    id: 1,
    text: "Go workout",
    completed: false
  },
  {
    id: 2,
    text: "Read",
    completed: false
  },
  {
    id: 3,
    text: "Floss",
    completed: false
  },
  {
    id: 4,
    text: "Eat some yummy food",
    completed: false
  },
]

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todoData, setTodoData] = useState(dummyData);
  
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodoData(storageTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoData));
  }, [todoData]);


  const addTodo = todo => {
    setTodoData([todo, ...todoData])
  }

  const toggleComplete = (id) => {
    setTodoData(
      todoData.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: todo.completed
          };
        }
        return todo;
      })
    );
  }

  const bouncer = (id) => {
    setTodoData(todoData.filter(todo => todo.id !== id))
  }

  return (
    <div className="App" style = {{ backgroundColor: 'grey' }}>
      <h1>What should we get done?</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
      stuffTodo={todoData}
       toggleComplete={toggleComplete}
        bouncer={bouncer} />
    </div>
  );
}

export default App;
