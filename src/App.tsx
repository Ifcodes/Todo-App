import React,{useState} from 'react'
import { Display } from '../types'
import TodoDisplay from './components/TodoDisplay'
import TodoFooter from './components/TodoFooter'
import TodoInput from './components/TodoInput'

interface Todo {
  id: number,
  text: string,
  completed: boolean
}


function App() {
 const [todos, setTodos] = useState<Todo[]>([])
 const [todosCopy, setTodoCopy ]= useState<Display>('all')


  const activeTodo =  todos.filter(todo => todo.completed === false)


  const completedTask = todos.filter(todo => todo.completed === true)

  return (
    <div className="App">
      <header>
        <h1>todos</h1>
      </header>
      <div>
       <TodoInput 
       setTodos={setTodos} 
       todos={todos} 
       />
       <TodoDisplay 
       setTodos={setTodos} 
       todos={todos} 
       todosCopy={todosCopy}
       activeTodo={activeTodo}
       completedTask={completedTask}
       />
       <TodoFooter 
       setTodos={setTodos} 
       todos={todos} 
       activeTodo={activeTodo}
       completedTask={completedTask}
       setTodoCopy={setTodoCopy}
       />
      </div>
    </div>
  );
}

export default App;
