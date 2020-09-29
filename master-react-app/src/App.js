import React, {Component} from 'react';
import User from "./myItem"

import './App.css';

class App extends Component {

  state = {
    users: [
    {name: "joh", age: 40},
    {name: "filippo", age: 30},
    {name: "marco", age: 20},
    ],

  }

  deleteUser = (index, e) => {
    const users = [...this.state.users]
    users.splice(index, 1);
    this.setState({users: users})
  }

  render() {
    return (
      <div>

      <ul>
        {this.state.users.map((item, index)=> <User value={item.name} age={item.age} delEvent= {() => this.deleteUser(index)}></User>)}

      </ul>

      </div>
    )
  }
}

export default App;
