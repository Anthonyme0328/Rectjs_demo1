import { Component } from 'react';
import Todoitems from './Todoitems'
import '../App.css';

class Todos extends Component{
  render (){
    return this.props.todos.map((todos) =>
    <Todoitems todos = {todos}/>
    )
  }
}

export default Todos;
