import React, { Component } from 'react';
import firebase from 'firebase';
import AllUsers from './components/all-users.js'
import Header from './components/header.js'
import DefaultHelp from './components/default-help.js'
import SingleUser from './components/single-user.js'
import {
    BrowserRouter as Router,
    Route,
    Switch
 } from 'react-router-dom';

import './App.css';

class App extends Component {
  // Initialize state
  state = {
    users: []
  }

  componentDidMount() {
  }

  getPasswords = () => {
    // TODO: REPLACE WITH CALL TO TWILIO
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {

    return (


      <div className="App">
        <Header />
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route exact path="/" component={AllUsers} />
            <Route path="/sampleuser" component={SingleUser} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
