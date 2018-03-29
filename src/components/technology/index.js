import React from 'react';
import { Route } from 'react-router-dom';

import TechEvent from './js/event';
import TechObject from './js/object';
import TechFunction from './js/function';
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
          {/* 
          <Route path={`${match.url}/bathroom`} component={Bathroom} />
          <Route path={`${match.url}/hallway`} component={HallWay} />
          <Route path={`${match.url}/bedroom`} component={Bedroom} />
          <Route path={`${match.url}/kitchen`} component={Kitchen} />
          <Route path={`${match.url}/study`} component={Study} />
          <Route path={`${match.url}/cloakroom`} component={Cloakroom} /> */}
        </div>
      </div>
    );
  }
}
