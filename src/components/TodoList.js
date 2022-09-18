import React from 'react'
import Todo from './Todo'

const TodoList = ({stuffTodo}) => {
  return (
    <div>
        <h4>Todo List:</h4>
        <ul>
        {stuffTodo.map((task) =>  (
             <Todo key={task.todo_id} theTask={task} /> )) }
        </ul>

    </div>
  )
}

export default TodoList