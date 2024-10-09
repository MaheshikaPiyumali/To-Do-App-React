import React, { useState } from 'react';
import TodoForm from './TodoForm';
import{v4 as uuidv4} from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

export default function TodoWrpper() {

  const [todos, settodos]=useState([]);

  const addTodo =(todo)=>{
   settodos([
    ...todos,{id :uuidv4(), task:todo, completed:false,isEditing:false},
   ]);
  }
//delete Todo
const deleteTodo =(id) => settodos(todos.filter((todo)=>todo.id!==id));

//toggel complete Todo
const toggleComplete =(id)=>{
  settodos(
    todos.map((todo)=>todo.id === id ? { ...todo,completed: !todo.completed}:todo)

    
  )
}

//Edit Todo
const editTodo =(id)=>{
  settodos(
    todos.map((todo)=>todo.id === id ? {...todo, isEditing :!todo.isEditing}:todo)

  )
}

// edit Task todo
const editTask =(task,id)=>{
  settodos(
    todos.map((todo)=>todo.id === id ?{...todo,task, isEditing: !todo.isEditing} :todo)
  )

}

  console.log("todos",todos)
  return (
    <div className='TodoWrapper'>Web Developmet Done!
    <TodoForm  addTodo={addTodo}/>

    {todos.map((todo)=>todo.isEditing ?(
      <EditTodoForm editTodo={editTask}task={todo}/>
    ):(
      <Todo
      key ={todo.id}
      task = {todo}
       deleteTodo ={deleteTodo}
       editTodo ={editTodo}
      toggleComplete ={toggleComplete}
      />
    ))}
    </div>

  );
}
