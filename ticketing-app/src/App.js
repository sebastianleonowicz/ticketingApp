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
    displayedComponent: 'Home',
    title: null,
    description: null,
    accCriteria: null,
    deadline: null
  }

  whichComponentDisplayed = (string) => {
    console.log('changing state from: ', this.state.displayedComponent);
    this.setState({
    displayedComponent: string
    }, () => {
      console.log('changed state to: ', this.state.displayedComponent);
    })
  }

  updateTicketData = (event, ticketKey) => {
    console.log(event.target.value);
    this.setState({
        [ticketKey]: event.target.value
    })
  }

  createTicket = (event) => {
    console.log(this.state);
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
        <Form clickCreate={this.createTicket}
              clickUpdateTitle={(e) => this.updateTicketData(e, 'title')}
              clickUpdateDescription={(e) => this.updateTicketData(e, 'description')}
              clickUpdateAccCriteria={(e) => this.updateTicketData(e, 'accCriteria')}
              clickUpdateDeadline={(e) => this.updateTicketData(e, 'deadline')}
        ></Form>
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
