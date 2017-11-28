import React from 'react';
import { Route } from 'react-router';

import { AuthRoute } from '../util/route_util';
import GreetingContainer from './GreetingContainer';
import SessionFormContainer from './SessionFormContainer';
import BenchesIndexContainer from './benches/BenchesIndexContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>BenchBnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path='/' exact component={BenchesIndexContainer} />
    </div>
  )
}

export default App;
