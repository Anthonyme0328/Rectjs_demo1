import React, { Component } from 'react'
import propTypes from 'prop-types'

export class Todoitems extends Component {
  render() {
    return (
      
      <div style= {{backgroundColor: '#f4f4f4'}}>
        <p>{this.props.todos.title}</p>
      </div>
    )
  }
}

Todoitems.propTypes = {
  Todoitems: propTypes.object.isRequired
}

export default Todoitems
