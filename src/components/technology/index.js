import React from 'react';
import { Route } from 'react-router-dom';

import TechEvent from './js/event';
import TechObject from './js/object';
import TechFunction from './js/function';
import Statement from './js/statement-expression';
import './index.css';

export default class Tech extends React.Component {
  componentDidMount() {
    // document.body.requestFullscreen()
  }
  render() {
    const match = this.props.match;
    // const toObjFactory = path => {
    //   return {
    //     pathname: match.url + '/' + path
    //   };
    // };
    return (
      <div className="tech">
        {/* <div className="nav">
          <NavLink to={toObjFactory('balcony')}>balcony</NavLink>
        </div> */}
        <div id="content" name="content">
          <Route exact path={match.url} component={TechEvent} />
          <Route path={`${match.url}/event`} component={TechEvent} />
          <Route path={`${match.url}/object`} component={TechObject} />
          <Route path={`${match.url}/function`} component={TechFunction} />
          <Route path={`${match.url}/statement`} component={Statement} />
        </div>
      </div>
    );
  }
}
