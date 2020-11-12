import React, { Component } from 'react'

export class Todoitems extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todos.title}</p>
      </div>
    )
  }
}

export default Todoitems
