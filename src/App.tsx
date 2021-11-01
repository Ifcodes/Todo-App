import React,{useState, KeyboardEvent, ChangeEvent} from 'react'


interface Todo {
  id: number,
  text: string,
  completed: boolean
}

function App() {
 const [newTodo, setNewTodo] = useState('')
 const [todos, setTodos] = useState<Todo[]>([])

 const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
   return setNewTodo(e.target.value)
 }

 const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
   if(e.key === 'Enter') {
      e.preventDefault()
      setTodos(() => todos.concat(
        {
          id: todos.length + 1, 
          text: newTodo, 
          completed: false
        }
      ))
   }
   setNewTodo('')
 }

  return (
    <div className="App">
      <header>
        <h1>todos</h1>
      </header>
      <div>
        <form>
           <input type='text' value={newTodo} onChange={handleChange} onKeyDown={handleSubmit}/> 
        </form>
       <div>
         {todos.map((todo, index) => <div key={`key${index}`}>
           {todo.text} 
         </div>)}
       </div>
      </div>
      
    </div>
  );
}

export default App;
