import React from 'react'
import Todo from './Todo'
import { List } from '@mui/material';

const TodoList = ({stuffTodo, toggleComplete, bouncer}) => {

  return (
    <div>
        <h4>Todo List:</h4>
        <List>
        {stuffTodo.map((task) =>  (
             <Todo key={task.id}
              theTask={task}
               toggleComplete={toggleComplete}
                bouncer={bouncer}/> )) }
        </List>

    </div>
  )
}

export default TodoList