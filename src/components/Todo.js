import React from 'react'

const Todo = ({theTask, toggleComplete}) => {

    const checkboxHandler = () => {
        toggleComplete(theTask.id);
    }

  return (
    <div style = {{display: 'flex' }}>
        <input type ='checkbox' onClick={checkboxHandler}/>
            <li
            style = {{
                color: 'white',
                textDecoration: theTask.completed ? 'line-through' : null 
            }}
            >
                Let's do this: {theTask.text}!
            </li>
            <button>X</button>
 
    </div>
  )
}

export default Todo