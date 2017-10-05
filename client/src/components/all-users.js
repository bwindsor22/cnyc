import React, { Component } from 'react';
import firebase from 'firebase';

class AllUsers extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const allUsers = snapshot.val()
      console.log(allUsers)
      if (allUsers != null) {
        this.setState({
          users: allUsers
        })
      }
    })
  }


  render() {
    const allUsers = this.state.users.map((user,i) => {
          return (
              <li key={user.id}>
              First: {user.first} Last: {user.last} Referral No.: {user.referral} Zip Code: {user.zip}
              </li>
          )

    })

    return (
      <div>
        <h1>
          All Users
        </h1>
        <ol>
          {allUsers}
        </ol>
    </div>
    );
  }
}

export default AllUsers;
