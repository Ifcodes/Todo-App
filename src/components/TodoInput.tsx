import { useState, FormEvent, ChangeEvent } from 'react';

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const TodoInput = ({setTodos, todos}:{setTodos: Function, todos: Todo[]}) => {
  const [newTodo, setNewTodo] = useState('')

   const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
   return setNewTodo(e.target.value)
 }

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault()
    setTodos(() => todos.concat(
      {
        id: todos.length + 1, 
        text: newTodo, 
        completed: false
      }
    ))
   setNewTodo('')
 }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type='text' value={newTodo} onChange={handleChange} /> 
      </form>
    </>
  )
}

export default TodoInput