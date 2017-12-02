import React from 'react';
import { Route } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/GreetingContainer';
import SessionFormContainer from './session_form/SessionFormContainer';
import SearchContainer from './search/SearchContainer';
import BenchFormContainer from './bench_form/BenchFormContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>BenchBnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <ProtectedRoute path='/benches/new' component={BenchFormContainer} />
      <Route path='/' exact component={SearchContainer} />
    </div>
  )
}

export default App;
