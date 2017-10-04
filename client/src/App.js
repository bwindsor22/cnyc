import React, { Component } from 'react';
import firebase from 'firebase';
import CaseStatus from './components/case-status.js'

import './App.css';

class App extends Component {
  // Initialize state
  state = {
    passwords: [],
    messages: []
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();

    firebase.database().ref('messages/').on('value', (snapshot) => {
      const currentMessages = snapshot.val()
      console.log(currentMessages)
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;
    const currentMessage = this.state.messages.map((message,i) => {
          return (
              <li key={message.id}>
              First: {message.first} Last: {message.last} Referral No.: {message.referral} Zip Code: {message.zip}
              </li>
          )
    })
{/*
https://daveceddia.com/create-react-app-express-production/
  */}
    return (
      <div className="App">
        <CaseStatus />
        <div>
          <ol>
            {currentMessage}
          </ol>

        </div>
      </div>
    );
  }
}

export default App;
