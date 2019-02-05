import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'

class App extends Component {
  state = {
    loggedIn: 'false'
  }

  render() {
    return (
      <div className="App">
       <Home></Home>
      </div>
    );
  }
}

export default App;
