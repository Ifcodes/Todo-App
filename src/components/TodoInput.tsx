import { useState, FormEvent, ChangeEvent } from 'react';
import { Todo } from '../App'
import styled from 'styled-components';
import ArrowDown from '../vectors/arrowdown.png'
const TodoForm = styled.form`
  display: flex;
  padding: 0.2rem 0.5rem;
  background-color: white;
  border-bottom: ${(props) => props.theme.styles.lightBorderBottom};
  align-items: center;

  img{
    width: 1.5rem;
    height: 1.5rem;
  }
`
const Input = styled.input`
    outline: none;
    border: none;
    width: 85%;
    padding: 0.75rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.grey};

    ::placeholder {
    font-size: 1.2rem;
    font-style: italic;
    word-spacing: 5px;
    opacity: .2;
    color: ${(props) => props.theme.colors.grey};
  };
`
const TodoInput = ({setTodos, todos, markAll, setMarkAll}:{setTodos: Function, todos: Todo[], markAll: Boolean, setMarkAll: Function}) => {
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

 const handleMarkAll = () => {
   setMarkAll(markAll = !markAll)
  //  todos.map(todo => todo.completed = !todo.completed)
   
 }

  return (
    <>
      <TodoForm onSubmit={handleSubmit}>
          <img src={ArrowDown} alt='arrowdown' onClick={handleMarkAll}/>
          <Input type='text' value={newTodo} onChange={handleChange} placeholder='What needs to be done?'/> 
      </TodoForm>
    </>
  )
}

export default TodoInput