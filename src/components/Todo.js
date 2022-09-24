import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from '@mui/material';

const Todo = ({theTask, toggleComplete, bouncer}) => {

    const checkboxHandler = () => {
        toggleComplete(theTask.id);
    }

    const handleBouncer = () => {
        bouncer(theTask.id)
    }

  return (
    <ListItem style = {{display: 'flex' }}>
        <Checkbox
        checked={theTask.completed}
          onClick={checkboxHandler}/>
            <Typography
            variant='body1'
            style = {{
                textDecoration: theTask.completed ? 'line-through' : null 
            }}
            >
                Let's do this: {theTask.text}!
            </Typography>
            <IconButton onClick={handleBouncer}>
                X
            </IconButton>
 
    </ListItem>
  )
}

export default Todo