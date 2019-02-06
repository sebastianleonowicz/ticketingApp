import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import './Components/Home/Home.css'
import Navigation from './Components/Navigation/Navigation'
import './Components/Navigation/Navigation.css'

class App extends Component {
  state = {
    displayedComponent: 'Home'
  }

  whichComponentDisplayed = () => {
    console.log(this.state);
    this.setState({
    displayedComponent: 'None'
    }, () => {
      console.log(this.state);
    })
    
  }

  render() {
    return (
      <div className="App">
        <Navigation click={this.whichComponentDisplayed}></Navigation>
        <div className='container'>
          { this.state.displayedComponent === 'Home' ?
            <Home></Home> : null
          }
        </div>
      </div>
    );
  }
}

export default App;
