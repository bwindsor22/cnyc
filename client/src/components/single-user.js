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
      console.log("found user:")
      console.log(user)
      console.log(user.status)
      console.log(user.status.helpEmail)
      if (user != null) {
        this.setState({
          user: user,
          status: status
        })
      }
      console.log(this.state.user)
    })
  }


  render() {
    const user = this.state.user;
    const status = this.state.status;
    console.log("status")
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
