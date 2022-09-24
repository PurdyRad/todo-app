import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { Button, TextField } from '@mui/material';

const initalValues = {
    id: '',
    text: '',
    completed: false
}

const TodoForm = ({addTodo}) => {
    const [formValues, setFormValues] = useState(initalValues);

    const changeHandler = e => {
        setFormValues({...formValues, text: e.target.value})
    }

    const buttonMasher = e => {
        e.preventDefault();
        if (formValues.text.trim()) {
            addTodo({...formValues, id: uuidv4() })
        }
        setFormValues({...formValues, text: ''})
    }


  return (
    <div>
        <form className='todo-form' onSubmit={buttonMasher}>
        TodoForm
        <TextField
        label='Task' 
        name='task'
        type='text' 
        value={formValues.text} 
        onChange={changeHandler}/>
        <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}
 export default TodoForm;