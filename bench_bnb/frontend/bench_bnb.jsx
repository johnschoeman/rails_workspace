import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

// Testing
import { signup, login, logout } from './util/session_api_util';
import { getBenches, createBench } from './util/bench_api_util';
import { fetchBenches } from './actions/bench_actions';

// window.fetchBenches = fetchBenches;
// window.getBenches = getBenches

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
});