import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [Todos,SetTodos]=useState([])

    const addTodo = Todo =>{
        if (! Todo.text){
            return 
        }
        const newTodos=[Todo,...Todos]
        SetTodos(newTodos);
        console.log(Todo,...Todos)
    }

    const updateTodo=(TodoId,NewValue)=>{
      if (!NewValue.text || /^\s*$/.test(NewValue.text)) {
        return;
      }
  
      SetTodos(prev => prev.map(item => (item.id === TodoId ? NewValue : item)));
    }
  

    const removeTodo=id=>{
      const deleteTodo=[...Todos].filter(Todo=> Todo.id !==id)
      SetTodos(deleteTodo)
    }

    const completeTodo=id => {
      let updateTodos= Todos.map(Todo => {
        if (Todo.id===id){
          Todo.isComplete= ! Todo.isComplete;
        }
        return Todo;
      })
      SetTodos(updateTodos)
    }
  

  return (
    <div>
        <h1 class="ml1">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters">My To Do List</span>
    <span class="line line2"></span>
  </span>
</h1>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>



        <TodoForm onSubmit={addTodo}/>
        <Todo
        Todos={Todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>

  )
}

export default TodoList