import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import './Components/Home/Home.css'
import Navigation from './Components/Navigation/Navigation'
import './Components/Navigation/Navigation.css'
import TicketForm from './Components/TicketForm/TicketForm'
import './Components/TicketForm/TicketForm.css'
import List from './Components/List/List'
import './Components/List/List.css'
import SignInForm from './Components/SignInForm/SignInForm'
import './Components/SignInForm/SignInForm.css'
import LogInForm from './Components/LogInForm/LogInForm'
import './Components/LogInForm/LogInForm.css'

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

let db = firebase.firestore()

class App extends Component {
  state = {
    displayedComponent: 'Home',
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

  updateUserData = (event, userKey) => {
    console.log(event.target.value);
    this.setState({
        [userKey]: event.target.value
    })
  }

  setLoggedInUser = () => {
    this.setState({
      loggedUser: firebase.auth().currentUser.email
    }, () => {
      console.log('this.state.loggedUser= ', this.state.loggedUser);
    })
  }

  checkCurrentUser = () => {
    if (firebase.auth().currentUser !== null){
      console.log(firebase.auth().currentUser.email);
      console.log(this.state);
    }else {
      console.log('current user is null: ', firebase.auth());
    }
  }

  signInUser = () => {
      let creationDate =  new Date().toString();
      firebase.auth().createUserWithEmailAndPassword(this.state.trySignInUser, this.state.trySignInPassword)
      .then(()=>{
        console.log('signed in');
        this.setLoggedInUser();
      })
      .then(() => {
        if(this.state.loggedUser !== null) {
          db.collection("users").add({
            name: this.state.loggedUser,
            creationDate: creationDate
          })
          .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);      
      })
  }

  logInUser = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.trySignInUser, this.state.trySignInPassword)
    .then(()=>{
      console.log('signed in');
      this.setLoggedInUser();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);      
    })
  }

  signOut = () => {
    firebase.auth().signOut()
    .then(() => {
      console.log('Signed out');
      console.log(firebase.auth().currentUser.email);
      // Sign-out successful.
      this.setLoggedInUser();
    }).catch(function(error) {
      console.log(error)
      // An error happened.
    });
  }

  render() {
    
    let home = null;
    let ticketForm = null;
    let list = null;
    let signInForm = null;
    let logInForm = null;

    if (this.state.displayedComponent === 'Home') {
      home = (
        <Home clickSignIn={this.whichComponentDisplayed.bind(this, 'SignInForm')}
              clickLogIn={this.whichComponentDisplayed.bind(this, 'LogInForm')}>
        </Home>
      )
    }

    if (this.state.displayedComponent === 'TicketForm') {
      ticketForm = (
        <TicketForm firebase={firebase} 
                    loggedUser={this.state.loggedUser}
        ></TicketForm>
      )
    }

    if (this.state.displayedComponent === 'List') {
      list = (
        <List click={this.test}
              firebase={firebase}>
        </List>
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
      logInForm = (        
        <LogInForm  logInUser={this.logInUser}
                    checkCurrentUser={this.checkCurrentUser}
                    updateSignInUser={(e) => this.updateUserData(e, 'trySignInUser')}
                    updateSignInPassword={(e) => this.updateUserData(e, 'trySignInPassword')}
        ></LogInForm>
      )
    }

    return (
      <div className="App">
        <Navigation clickHome={this.whichComponentDisplayed.bind(this, 'Home')}
                    clickForm={this.whichComponentDisplayed.bind(this, 'TicketForm')}
                    clickList={this.whichComponentDisplayed.bind(this, 'List')}
                    signOut={this.signOut}>
        </Navigation>
        <div className='container'>
          {home}
          {ticketForm}
          {list}
          {signInForm}
          {logInForm}
        </div>
      </div>
    );
  }
}

export default App;
