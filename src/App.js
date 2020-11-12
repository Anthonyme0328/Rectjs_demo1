import Todos from './components/todos'
import './App.css'

import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    todos: [{
      id: 1,
      title: 'chore number one' ,
      completed: false
    },
    {
      id: 2,
      title: 'chore number two' ,
      completed: false
    },
    {
      id: 3,
      title: 'chore number three' ,
      completed: false
    },
  ]
    
  }
  render() {
    return (
      <div className = 'app'>

        <Todos todos = {this.state.todos}/>

      </div>
    );
  }
}


export default App;
