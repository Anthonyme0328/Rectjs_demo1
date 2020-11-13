import { Component } from 'react';
import Todoitems from './Todoitems'
import '../App.css';
import propTypes from 'prop-types'

class Todos extends Component{
  render (){
    return this.props.todos.map((todos) =>
    <Todoitems key = {todos.id} todos = {todos}/>
    )
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired
}

export default Todos;
