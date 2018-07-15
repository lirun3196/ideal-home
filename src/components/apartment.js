// Libs
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Detail from './detailRequirements';
import Overview from './overview/overview';

// contain all routes into a variable to be imported into index.js
const Apartment = () => (
  <React.Fragment>
    <Switch>
      <Route path="/home/overview" component={Overview} />
      <Route path="/home/" component={Detail} />
      <Redirect to="/home/overview" />
    </Switch>
  </React.Fragment>
);

export default Apartment;
