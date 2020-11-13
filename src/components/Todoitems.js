import React, { Component } from 'react'
import propTypes from 'prop-types'

export class Todoitems extends Component {

  getStyle = () => {

    if (this.props.todos.completed){
      return {
        textDecoration: 'line-through'
    }

  } else {

      return{
        textDecoration: 'none'
      }

  }
}

  render() {
    return (
      
      <div style= {this.getStyle()}>
        <p>{this.props.todos.title}</p>
      </div>
    )
  }
}

Todoitems.propTypes = {
  Todoitems: propTypes.object.isRequired
}

export default Todoitems
