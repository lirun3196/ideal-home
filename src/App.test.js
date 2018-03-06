import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import TestSinglePage from './components/testSth/testSinglePage';
import Balcony from './components/balcony';

it('renders TestSinglePage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestSinglePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Balcony without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Balcony />, div);
  ReactDOM.unmountComponentAtNode(div);
});
