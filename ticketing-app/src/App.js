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
import LogInForm from './Components/LogInForm/LogInForm'
import './Components/LogInForm/LogInForm.css'
import logInForm from './Components/LogInForm/LogInForm';

let firebase = require('firebase');

let config = {
  apiKey: "AIzaSyB-lp34a0Nzc_dfQdO60mCHzUUwD1zMzAE",
  authDomain: "trackeeper-ticketing-app.firebaseapp.com",
  databaseURL: "https://trackeeper-ticketing-app.firebaseio.com",
  projectId: "trackeeper-ticketing-app",
  storageBucket: "trackeeper-ticketing-app.appspot.com",
  messagingSenderId: "200313618890"
};

firebase.initializeApp(config);

class App extends Component {
  state = {
    displayedComponent: 'Home',
    title: null,
    description: null,
    accCriteria: null,
    deadline: null,
    loggedUser: null,
    trySignInUser: null,
    trySignInPassword: null
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

  updateUserData = (event, userKey) => {
    console.log(event.target.value);
    this.setState({
        [userKey]: event.target.value
    })
  }

  checkCurrentUser = () => {
    if (firebase.auth().currentUser !== null){
      console.log(firebase.auth().currentUser.email);
    }else {
      console.log('current user is null: ', firebase.auth());
    }
  }

  signInUser = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.trySignInUser, this.state.trySignInPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);      
    }, () => {
      console.log('current logged in User is:', firebase.auth().currentUser.email);
    });
  }

  logInUser = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.trySignInUser, this.state.trySignInPassword).catch(function(error) {
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
    let logInForm = null;

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
        <SignInForm signInUser={this.signInUser}
                    checkCurrentUser={this.checkCurrentUser}
                    updateSignInUser={(e) => this.updateUserData(e, 'trySignInUser')}
                    updateSignInPassword={(e) => this.updateUserData(e, 'trySignInPassword')}
        ></SignInForm>
      )
    }

    if (this.state.displayedComponent === 'LogInForm') {
      signInForm = (        
        <LogInForm logInUser={this.logInUser}
                    checkCurrentUser={this.checkCurrentUser}
                    updateSignInUser={(e) => this.updateUserData(e, 'trySignInUser')}
                    updateSignInPassword={(e) => this.updateUserData(e, 'trySignInPassword')}
        ></LogInForm>
      )
    }

    return (
      <div className="App">
        <Navigation clickHome={this.whichComponentDisplayed.bind(this, 'Home')}
                    clickForm={this.whichComponentDisplayed.bind(this, 'Form')}
                    clickList={this.whichComponentDisplayed.bind(this, 'List')}
                    signOut={this.signOut}>
        </Navigation>
        <div className='container'>
          {home}
          {form}
          {list}
          {signInForm}
          {logInForm}
        </div>
      </div>
    );
  }
}

export default App;
