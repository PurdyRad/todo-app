import React from 'react'
import Todo from './Todo'

const TodoList = ({stuffTodo}) => {
  return (
    <div>
        <div>Todo List</div>
        {stuffTodo.map((task) => { return <Todo key={task.todo_id} theTask={task} /> }) }

    </div>
  )
}

export default TodoList