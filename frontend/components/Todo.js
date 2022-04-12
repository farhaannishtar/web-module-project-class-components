import React from 'react'

const Todo = props => {
  return (
    <div onClick={ () => props.handleToggle(props.todo.id) }>
      <p> {props.todo.name} {props.todo.completed ? <span>✅</span> : <span></span>}</p>
    </div>
  )
}

export default Todo;