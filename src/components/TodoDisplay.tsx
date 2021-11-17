import React from "react"
import {Todo} from '../App'
import styled from 'styled-components'
import checkIcon from '../vectors/icons8-check-circle.gif'
import  CloseIconImg  from '../vectors/close.png'

const TodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: ${(props) => props.theme.styles.lightBorderBottom};

  .closeIcon{
    visibility: hidden;
  };

  :hover .closeIcon {
    visibility: visible;
    cursor: pointer;
  };

`
const TodoList = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};

  span{
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1.1rem
  }
  .done{
    opacity: .4;
    text-decoration: line-through;
  }
`
const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const CheckIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.1) ;
  cursor: pointer;

  .hideIcon{
    visibility: hidden;
  }

  .showIcon{
    visibility: visible;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
`

const TodoDisplay = (
  {
    setTodos, 
    todos, 
    todosCopy, 
    activeTodo, 
    completedTask, 
    markAll
  }
  :
  {
    setTodos: Function, 
    todos: Todo[], 
    todosCopy: string, 
    activeTodo: Todo[], 
    completedTask: Todo[], 
    markAll: Boolean
  }) => {

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
    <>
      {(todoToDisplay as Todo[]).map((todo, index) => 
      <TodoListWrapper key={`key${index}`}>
        <TodoList>
          <CheckIconDiv onClick={() => toggleTodo(todo.id)}>
            <img 
              src={checkIcon} 
              alt='checkIcon' 
              className={`${markAll || todo.completed ? 'showIcon' : 'hideIcon'}`}
            />
          </CheckIconDiv>
          <span className={`${markAll || todo.completed ? 'done'  : ''}`}>{todo.text}</span> 
        </TodoList>
        <CloseIcon className='closeIcon' onClick={() => removeTodo(todo.id)}>
          <img src={CloseIconImg} alt='close'/>
        </CloseIcon>
      </TodoListWrapper>)}
    </>
  )
}

export default TodoDisplay