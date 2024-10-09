import React, { useState } from 'react';

export default function TodoForm({addTodo}) {
    const [value,setValue]= useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("")
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit} className= "ToDoForm">
            <input type ="text" value={value}
            onChange={(e)=>setValue(e.target.value)}
            className='todo-input'
            placeholder='What is the task today'
            />
            <button type='submit'className='todo-btn'>Add Task</button>

        </form>
      
    </div>
  );
}
