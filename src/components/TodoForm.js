import React, {useState} from 'react';

const initalValues = {
    id: null,
    text: ''
}

const TodoForm = () => {
    const [formValues, setFormValues] = useState(initalValues);

    const changeHandler = e => {
        setFormValues(e.target.value)
    }

    const buttonMasher = e => {
        alert('You got things to do')
        e.preventDefault();
        console.log('u did it')
    }

  return (
    <div>
        <form onSubmit={buttonMasher}>
        TodoForm
        <input 
        type='text' 
        value={formValues.text} 
        onChange={changeHandler}/>
        <button>ADD ME</button>
        </form>
    </div>
  )
}
 export default TodoForm