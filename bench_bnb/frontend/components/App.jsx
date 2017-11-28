import React from 'react';
import { Route } from 'react-router';

import { AuthRoute } from '../util/route_util';
import GreetingContainer from './GreetingContainer';
import SessionFormContainer from './SessionFormContainer';
import SearchContainer from './benches/SearchContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>BenchBnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <Route path='/' exact component={SearchContainer} />
    </div>
  )
}

export default App;
