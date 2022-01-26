import {Todo} from '../App'
import { Button, StatusButton } from '../styles/resources'
import styled from 'styled-components'

const TodoFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0 ;
  justify-content: space-between;
  padding: 0 0.75rem 0;
  font-size: .85rem;
  color: ${props => props.theme.colors.primary};
`
const TodoFooterLeft = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  align-items: center;
`

const TodoFooter = ({setTodoCopy, activeTodo, completedTask, setTodos, todos, todoCopy, markAll}:{setTodoCopy: Function,  activeTodo: Todo[], completedTask: Todo[], setTodos: Function, todos: Todo[], todoCopy: string, markAll: Boolean}) => {
  
  const clearCompleted = () => {
   setTodos(todos.filter(todo => todo.completed === false))
 }

  return(
    <TodoFooterWrapper>
      <TodoFooterLeft>
        <span>{`${activeTodo.length} item${activeTodo.length > 1 ? 's' : ''} left`}</span>
        <div>
          <StatusButton none='none' active={todoCopy === 'all' ? true : false} onClick={() => setTodoCopy('all')}>All</StatusButton>
          <StatusButton none='none' active={todoCopy === 'active' ? true : false}  onClick={() => setTodoCopy('active')}>Active</StatusButton>
          <StatusButton none='none' active={todoCopy === 'completed' ? true : false}  onClick={() => setTodoCopy('completed')}>Completed</StatusButton>
        </div>
      </TodoFooterLeft>
      <div>
        {completedTask.length > 0 || markAll ? <Button onClick={clearCompleted}>Clear Completed</Button> : ''}
      </div>
      
    </TodoFooterWrapper>
  )
}

export default TodoFooter