// Libs
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Apartment from './components/apartment';
import Tech from './components/technology';
import TestSinglePage from './components/testSth/testSinglePage.js';

// contain all routes into a variable to be imported into index.js
const routes = (
  <Router>
    {/* If path is / then load the Plan component */}
    <App>
      <Switch>
        <Route exact path="/" component={Tech} />
        <Route path="/home" component={Apartment} />
        <Route path="/tech" component={Tech} />
        <Route path="/testSinglePage" component={TestSinglePage} />
      </Switch>
    </App>
  </Router>
);

export default routes;
