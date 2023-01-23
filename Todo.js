import React,{useState} from 'react'
import TodoForm from './TodoForm';
import{FcEditImage,FcCancel} from "react-icons/fc";

function Todo({Todos,completeTodo,removeTodo,updateTodo}) {
    const [edi,EditTodo]=useState({
        id:null,
        value:''
    })

    const submitUpdate=value =>{
      updateTodo(edi.id,value);
      EditTodo({
        id:null,
        value:'',
      })
    }

    if (edi.id){
      return<TodoForm edit={edi} onSubmit={submitUpdate}></TodoForm>
    }
    return Todos.map((Todo, index) => (
      <div className={Todo.isComplete ? 'Todo-row complete' : 'Todo-row'} key={index} >
        <div key={Todo.id} onClick={() => completeTodo(Todo.id)}>
          {Todo.text}
        </div>
        <div className='icons'>
         <FcCancel onClick={()=>{ removeTodo(Todo.id)}} className='delete-icon'></FcCancel>
         <FcEditImage onClick={()=>{ EditTodo({id: Todo.id,value:Todo.text})}} className='edit-icon'></FcEditImage>
       </div>
      </div>
  ));
};
export default Todo
