import React,{useState} from 'react'
import { Display } from '../types'
import TodoDisplay from './components/TodoDisplay'
import TodoFooter from './components/TodoFooter'
import TodoInput from './components/TodoInput'
import styled from 'styled-components'

export interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const TodoWrapper = styled.div`
  width: 40rem;
  margin: 2rem auto;
`

const ListContainer = styled.div`
  margin: 2rem auto;
  width: 70%;
  background-color: white;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0;

   * {
    position: relative;
  }
  :before,
  :after {
    position: absolute;
    content: "";
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  :before {
    width: 97%;
    bottom: -0.7rem;
    height: 0.5rem;
    left: 1.5%;
  }
  :after {
    width: 99%;
    left: 0.5%;
    height: 0.4rem;
    bottom: -0.4rem;
  }
`
const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightred};
`

function App() {
 const [todos, setTodos] = useState<Todo[]>([])
 const [todosCopy, setTodoCopy ]= useState<Display>('all')
 const [markAll, setMarkAll] = useState(false)


  const activeTodo =  todos.filter(todo => todo.completed === false)


  const completedTask = todos.filter(todo => todo.completed === true)

  return (
    <TodoWrapper>
      <Title>
        todos
      </Title>
      <ListContainer>
        <TodoInput 
        setTodos={setTodos} 
        todos={todos} 
        markAll={markAll}
        setMarkAll={setMarkAll}
        />
        <TodoDisplay 
        setTodos={setTodos} 
        todos={todos} 
        todosCopy={todosCopy}
        activeTodo={activeTodo}
        completedTask={completedTask}
        markAll={markAll}
        /> 
        {todos.length > 0 && <TodoFooter 
        setTodos={setTodos} 
        todos={todos} 
        activeTodo={activeTodo}
        completedTask={completedTask}
        setTodoCopy={setTodoCopy}
        todoCopy={todosCopy}
        markAll={markAll}
        />}
      </ListContainer>
    </TodoWrapper>
  );
}

export default App;
