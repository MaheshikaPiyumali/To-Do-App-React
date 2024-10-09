import React from 'react';
import {useState} from 'react';

export default function EditTodoForm({editTodo,task}) {
    const [value, setValue] = useState(task.task)

    const handleSubmit =(e)=>{
        e.preventDefault();
        editTodo(value, task.id)
    }

  return (
    <form  onSubmit={handleSubmit} className='TodoForm'>
        <input type = "text"
        onChange ={(e)=>setValue(e.target.value)}
        className='todo-input'
        placeholder='Update Task...'/>

        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
}
