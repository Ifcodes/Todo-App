import React,{useState, FormEvent, ChangeEvent} from 'react'
import { Display } from '../types'

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

function App() {
 const [newTodo, setNewTodo] = useState('')
 const [todos, setTodos] = useState<Todo[]>([])
 const [todosCopy, setTodoCopy ]= useState<Display>('all')

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

 const toggleTodo = (id: number) => {
   setTodos(todos.map((todo) => {
     if(todo.id === id) todo.completed = !todo.completed

     return todo
   }))
 }

 const removeTodo = (id: number) => {
   setTodos(todos.filter(todo => todo.id !== id))
 }

 const activeTodo =  todos.filter(todo => todo.completed === false)


 const completedTask = todos.filter(todo => todo.completed === true)
 

 const todoToDisplay= todosCopy === 'active' ? activeTodo : todosCopy === 'completed' ? completedTask : todos

 const clearCompleted = () => {
   setTodos(todos.filter(todo => todo.completed === false))
 }

  return (
    <div className="App">
      <header>
        <h1>todos</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
           <input type='text' value={newTodo} onChange={handleChange} /> 
        </form>
       <div>
         {(todoToDisplay as Todo[]).map((todo, index) => <div key={`key${index}`}>
           <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
           <span>{todo.text}</span> 
           <button onClick={() => removeTodo(todo.id)}>delete</button>
         </div>)}
       </div>
       <div>
         <span>{`${todos.length} item${todos.length > 1 ? 's' : ''} left`}</span>
         <button onClick={() => setTodoCopy('all')}>All</button>
         <button onClick={() => setTodoCopy('active')}>Active</button>
         <button onClick={() => setTodoCopy('completed')}>Completed</button>
         {completedTask.length > 0 ? <button onClick={clearCompleted}>Clear Completed</button> : ''}
       </div>
      </div>
    </div>
  );
}

export default App;
