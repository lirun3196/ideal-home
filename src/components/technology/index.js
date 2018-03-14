import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import BasePage from './basePage/basePage';

export default class Tech extends React.Component {
  //http://jaketrent.com/post/addremove-classes-raw-javascript/
  constructor(props) {
    super(props);
    this.state = {
      navPageClass: 'birds-view',
      moveUp: false
    };
  }
  componentDidMount() {
    // document.body.requestFullscreen()
  }
  render() {
    const match = this.props.match;
    const toObjFactory = path => {
      return {
        pathname: match.url + '/' + path
      };
    };
    return (
      <div className="app">
        <div className="nav">
          <NavLink to={toObjFactory('balcony')}>balcony</NavLink>
        </div>
        <div
          id="content"
          name="content"
          ref={content => {
            this.contentWrap = content;
          }}
        >
          <Route exact path={match.url} component={Balcony} />
          <Route path={`${match.url}/balcony`} component={Balcony} />
          <Route path={`${match.url}/livingroom`} component={LivingRoom} />
          <Route path={`${match.url}/bathroom`} component={Bathroom} />
          <Route path={`${match.url}/hallway`} component={HallWay} />
          <Route path={`${match.url}/bedroom`} component={Bedroom} />
          <Route path={`${match.url}/kitchen`} component={Kitchen} />
          <Route path={`${match.url}/study`} component={Study} />
          <Route path={`${match.url}/cloakroom`} component={Cloakroom} />
        </div>
      </div>
    );
  }
}
