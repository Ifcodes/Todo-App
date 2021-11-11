import {useState} from 'react'

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const TodoFooter = ({setTodoCopy, activeTodo, completedTask, setTodos, todos}:{setTodoCopy: Function,  activeTodo: Todo[], completedTask: Todo[], setTodos: Function, todos: Todo[]}) => {
  
  const clearCompleted = () => {
   setTodos(todos.filter(todo => todo.completed === false))
 }

  return(
    <div>
    <span>{`${activeTodo.length} item${activeTodo.length > 1 ? 's' : ''} left`}</span>
    <button onClick={() => setTodoCopy('all')}>All</button>
    <button onClick={() => setTodoCopy('active')}>Active</button>
    <button onClick={() => setTodoCopy('completed')}>Completed</button>
    {completedTask.length > 0 ? <button onClick={clearCompleted}>Clear Completed</button> : ''}
    </div>
  )
}

export default TodoFooter