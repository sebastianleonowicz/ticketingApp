import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import './Components/Home/Home.css'
import Navigation from './Components/Navigation/Navigation'
import './Components/Navigation/Navigation.css'

class App extends Component {
  state = {
    loggedIn: 'false'
  }

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Home></Home>
      </div>
    );
  }
}

export default App;
