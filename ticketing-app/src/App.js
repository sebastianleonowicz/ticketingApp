import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import './Components/Home/Home.css'
import Navigation from './Components/Navigation/Navigation'
import './Components/Navigation/Navigation.css'
import Form from './Components/TicketForm/TicketForm'
import './Components/TicketForm/TicketForm.css'
import List from './Components/List/List'
import './Components/List/List.css'
import SignInForm from './Components/SignInForm/SignInForm'
import './Components/SignInForm/SignInForm.css'

var firebase = require('firebase');

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

  signInUser = () => {
    firebase.auth().createUserWithEmailAndPassword('wht@gmail.com', 'random string').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);      
    });
  }

  logInUser = () => {
    firebase.auth().signInWithEmailAndPassword('wht@gmail.com', 'random string').catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    })
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
      console.log('Signed out');
      console.log(firebase.auth().currentUser.email);
      // Sign-out successful.
    }).catch(function(error) {
      console.log(error)
      // An error happened.
    });
  }

  render() {
    let home = null;
    let form = null;
    let list = null;
    let signInForm = null;

    if (this.state.displayedComponent === 'Home') {
      home = (
        <Home clickSignIn={this.whichComponentDisplayed.bind(this, 'SignInForm')}></Home>
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
        <List click={this.test} click2={this.signOut}></List>
      )
    }

    if (this.state.displayedComponent === 'SignInForm') {
      signInForm = (        
        <SignInForm></SignInForm>
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
          {signInForm}
        </div>
      </div>
    );
  }
}

export default App;

var config = {
  apiKey: "AIzaSyB-lp34a0Nzc_dfQdO60mCHzUUwD1zMzAE",
  authDomain: "trackeeper-ticketing-app.firebaseapp.com",
  databaseURL: "https://trackeeper-ticketing-app.firebaseio.com",
  projectId: "trackeeper-ticketing-app",
  storageBucket: "trackeeper-ticketing-app.appspot.com",
  messagingSenderId: "200313618890"
};

firebase.initializeApp(config);