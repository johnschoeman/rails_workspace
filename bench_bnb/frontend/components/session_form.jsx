import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    const formType = this.props.formType;
    let headerText = undefined;
    let submitButton = undefined;
    let linkTo = undefined;

    if (formType === 'login') {
      headerText = 'Log In' ;
      linkTo = <Link to='/signup'>Go To Sign Up</Link>;
      submitButton = <button onClick={this.handleSumbit} >Log In</button>
    } else if (formType === 'signup') {
      headerText = 'Sign Up'
      linkTo = <Link to='/login'>Go To Log In</Link>;
      submitButton = <button onClick={this.handleSumbit} >Sign Up</button>
    }

    console.log(this.state)

    return (
      <div>
        <header>{headerText}</header>
        <div>
          Username: 
          <input 
            type="text"
            onChange={this.update('username')}
            value={this.state.username}>
          </input>
        </div>
        <div>
          Password:
          <input 
            type="password"
            onChange={this.update('password')}
            value={this.state.password}>
          </input> 
        </div>

        {submitButton}

        {linkTo}
      </div>
    );
  }
}

export default SessionForm;