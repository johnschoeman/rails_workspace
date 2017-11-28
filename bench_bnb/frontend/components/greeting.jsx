import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends Component {
  render() {
    const currentUser = this.props.currentUser
    const logout = () => {
      this.props.logout();
    }
    if (currentUser) {
      return (
        <div>
          <h3>Welcome {currentUser.username}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      )
    }
    return (
      <div>
        <Link to={'signup'}> Sign Up </Link>
        <Link to={'login'}> Log In </Link>
      </div>
    );
  }
}

export default Greeting;