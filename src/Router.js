import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './App';
import Result from './Pages/result';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/:search' exact component={Result} />
    </Switch>
  </Router>
);

export default App;
