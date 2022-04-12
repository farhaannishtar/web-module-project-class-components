import Todo from './Todo'
import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (<Todo key={this.id} todo={todo}/>)
          })
        }
      </ul>
    )
  }
}
