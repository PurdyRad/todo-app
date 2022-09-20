import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

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
        <form onSubmit={buttonMasher}>
        TodoForm
        <input 
        name='task'
        type='text' 
        value={formValues.text} 
        onChange={changeHandler}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
 export default TodoForm;