import React from 'react';
import { Route } from 'react-router';

import GreetingContainer from './GreetingContainer';
import SessionFormContainer from './SessionFormContainer';

const App = () => {
  return (
    <div>
      <header>
        <h1>BenchBnB</h1>
        <GreetingContainer />
      </header>

      <Route path='/signup' component={SessionFormContainer} />
      <Route path='/login' component={SessionFormContainer} />
    </div>
  )
}

export default App;
