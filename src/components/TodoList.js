import React from 'react'
import Todo from './Todo'

const TodoList = ({stuffTodo, toggleComplete}) => {

  return (
    <div>
        <h4>Todo List:</h4>
        <ul>
        {stuffTodo.map((task) =>  (
             <Todo key={task.id} theTask={task} toggleComplete={toggleComplete} /> )) }
        </ul>

    </div>
  )
}

export default TodoList