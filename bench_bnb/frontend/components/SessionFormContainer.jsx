import React, { Component } from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = undefined;
  if (ownProps.location.pathname === '/login') {
    formType = 'login';
  } else if (ownProps.location.pathname === '/signup') {
    formType = 'signup';
  }
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors.sessionErrors,
    formType
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = undefined;
  if (ownProps.location.pathname === '/login') {
    processForm = login;
  } else if (ownProps.location.pathname === '/signup') {
    processForm = signup;
  }
  return {
    processForm: (user) => dispatch(processForm(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);