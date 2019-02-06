import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import './Components/Home/Home.css'
import Navigation from './Components/Navigation/Navigation'
import './Components/Navigation/Navigation.css'
import Form from './Components/Form/Form'
import './Components/Form/Form.css'
import List from './Components/List/List'
import './Components/List/List.css'

class App extends Component {
  state = {
    displayedComponent: 'Home'
  }

  whichComponentDisplayed = (string) => {
    console.log('changing state from: ',this.state.displayedComponent);
    this.setState({
    displayedComponent: string
    }, () => {
      console.log('changed state to: ', this.state.displayedComponent);
    })
  }

  render() {
    let home = null;
    let form = null;
    let list = null;

    if (this.state.displayedComponent === 'Home') {
      home = (
        <Home></Home>
      )
    }

    if (this.state.displayedComponent === 'Form') {
      form = (
        <Form></Form>
      )
    }

    if (this.state.displayedComponent === 'List') {
      list = (
        <List></List>
      )
    }

    return (
      <div className="App">
        <Navigation clickHome={this.whichComponentDisplayed.bind(this, 'Home')}
                    clickForm={this.whichComponentDisplayed.bind(this, 'Form')}
                    clickList={this.whichComponentDisplayed.bind(this, 'List')}>
        </Navigation>
        <div className='container'>
          {home}
          {form}
          {list}
        </div>
      </div>
    );
  }
}

export default App;
