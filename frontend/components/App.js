import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const todos = [
  {
    name: 'Set up bed',
    id: 1,
    completed: false
  },
  {
    name: 'love being yourself',
    id: 2,
    completed: true
  },
  {
    name: "Complete module project",
    id: 3,
    completed: false
  }
];


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: todos
    }
  }

  handleAdd = (e, todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed) 
    })
  }

  clearPurchased = (e) => {
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    })
  }

  render() {
    return (
      <div>
        <h1>What I Need to Do</h1>
        <TodoList todos={this.state.todos}/>
        <Form add={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
