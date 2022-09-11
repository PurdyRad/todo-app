import React from 'react'

const Todo = ({theTask}) => {
  return (
    <div>
        <div> Let's do this: {theTask.todo_text} </div>
    </div>
  )
}

export default Todo