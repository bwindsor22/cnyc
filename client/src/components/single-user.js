import React, { Component } from 'react';
import firebase from 'firebase';

class SingleUser extends Component {
  state = {
    user: {},
    status:{}
  }

  componentDidMount() {
    const id = 0

    firebase.database().ref('messages/' + String(id)).on('value', (snapshot) => {
      const user = snapshot.val()
      const status = user.status
      console.log(user)

      if (user != null) {
        this.setState({
          user: user,
          status: status
        })
      }
    })
  }


  render() {
    const user = this.state.user;
    const status = this.state.status;
    return (
        <div>
          <h1> {user.first} {user.last} </h1>
          <p>Referral No.: {user.referral} Zip Code: {user.zip} </p>
          <h4> Status </h4>
            <br />{status.userStatus}
            <br />{status.helpUrl}
            <br />{status.helpEmail}
            <br />{status.helpPhone}
        </div>

    );
  }
}

export default SingleUser;
