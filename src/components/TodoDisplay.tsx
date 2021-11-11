import React from "react"

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const TodoDisplay = ({setTodos, todos, todosCopy, activeTodo, completedTask}:{setTodos: Function, todos: Todo[], todosCopy: string, activeTodo: Todo[], completedTask: Todo[]}) => {


   const toggleTodo = (id: number) => {
   setTodos(todos.map((todo) => {
     if(todo.id === id) todo.completed = !todo.completed

     return todo
   }))
 }

 const removeTodo = (id: number) => {
   setTodos(todos.filter(todo => todo.id !== id))
 }

 const todoToDisplay= todosCopy === 'active' ? activeTodo : todosCopy === 'completed' ? completedTask : todos

  return(
    <div>
      {(todoToDisplay as Todo[]).map((todo, index) => <div key={`key${index}`}>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
        <span>{todo.text}</span> 
        <button onClick={() => removeTodo(todo.id)}>delete</button>
      </div>)}
    </div>
  )
}

export default TodoDisplay