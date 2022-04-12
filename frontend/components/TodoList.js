import Todo  from './Todo'
import React from 'react'

const TodoList = props => {
  return (
    <div>
      {
        props.todos.map(todo => {
          return <Todo handleToggle={props.handleToggle} key={todo.id} todo={todo}/>
        })
      }
    </div>
  )
}

export default TodoList;