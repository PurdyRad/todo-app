import React from 'react'

const Todo = ({theTask}) => {

  return (
    <div style = {{display: 'flex' }}>
        <input type ='checkbox' />
            <li
            style = {{
                color: 'white',
                textDecoration: theTask.todo_completed ? 'line-through' : null 
            }}
            >
                Let's do this {theTask.todo_text}!
            </li>
            <button>X</button>
 
    </div>
  )
}

export default Todo