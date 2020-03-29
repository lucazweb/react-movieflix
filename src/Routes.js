import React from 'react';
import Intro from './components/Intro';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Intro} />
      <Route path='/detail/:id' component={MovieDetail} />
    </Switch>
  </Router>
);

export default Routes;
