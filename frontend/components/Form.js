import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      todoText: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(e, this.state.todoText);
    this.setState({
      todoText: ''
    });
  }
  render() {
    return (
      <form>
        <input 
          type="text" 
          name="todo"
          value={this.state.todoText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
}