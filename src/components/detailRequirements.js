import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import BasePage from './basePage/basePage';

import Balcony from './balcony';
import LivingRoom from './livingRoom';

import bathroomData from './bathroom/data.json';
import bathroomImgPaths from './bathroom/imgPaths.js';

import bedroomData from './bedroom/data.json';
import bedroomImgPaths from './bedroom/imgPaths.js';

import cloakroomData from './cloakroom/data.json';
import cloakroomImgPaths from './cloakroom/imgPaths.js';

import hallWayData from './hallway/data.json';
import hallWayImgPaths from './hallway/imgPaths.js';

import kitchenData from './kitchen/data.json';
import KitchenImgPaths from './kitchen/imgPaths.js';

import studyData from './study/data.json';
import studyImgPaths from './study/imgPaths';

import ResponseFullpage from './baseComponents/responseFullpage';
import './detail.css';

const pageFactory = (data, imgPaths) => (
  <BasePage data={data} sliders={[{ paths: imgPaths }]} />
);

const Bathroom = () => pageFactory(bathroomData, bathroomImgPaths);
const Bedroom = () => pageFactory(bedroomData, bedroomImgPaths);
const Cloakroom = () => pageFactory(cloakroomData, cloakroomImgPaths);
const HallWay = () => pageFactory(hallWayData, hallWayImgPaths);
const Kitchen = () => pageFactory(kitchenData, KitchenImgPaths);
const Study = () => pageFactory(studyData, studyImgPaths);

export default class ApartmentDetail extends React.Component {
  //http://jaketrent.com/post/addremove-classes-raw-javascript/
  constructor(props) {
    super(props);
    this.state = {
      navPageClass: 'birds-view',
      moveUp: false,
    };
  }
  componentDidMount() {
    this.setState({
      navPageClass: 'birds-view show',
    });
  }
  navClick = e => {
    // const event = { currentTarget: e.currentTarget, target: e.target, e };
    // console.log(event);
    this.setState({
      moveUp: true,
    });
  };
  /* componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.location.pathname !== prevProps.history.location.pathname) {
      // window.scrollTo(0,this.contentWrap.offsetTop)
    }
  } */
  render() {
    // let self = this;
    const match = this.props.match;
    /* const fullPageOpt = {
      afterSectionUp() {
        self.state.navPageClass !== 'birds-view show' &&
          self.setState({
            navPageClass: 'birds-view show'
          });
      }
    }; */
    const toObjFactory = path => ({
      pathname: match.url + '/' + path,
    });
    return (
      <div className="app">
        {/* <ResponseFullpage class={'jobs'} fullPageOpt={fullPageOpt}>
          <div className="header-section-headline">
            <p>All exists is necessary,</p>
            <p>necessary must be good</p>
          </div>
        </ResponseFullpage> */}
        <ResponseFullpage
          class={this.state.navPageClass}
          moveUp={this.state.moveUp}
          autoScroll={true}
        >
          <div className="nav-wrap" onClick={this.navClick}>
            <div className="flex-wrap level1">
              <div className="flex-wrap active-space-wrap">
                <div className="flex-wrap balcony-wrap">
                  <div className="air-space" />
                  <div className="main-balcony">
                    <NavLink to={toObjFactory('balcony')}>balcony</NavLink>
                  </div>
                </div>
                <div className="living-room">
                  <NavLink to={toObjFactory('livingroom')}>living-room</NavLink>
                </div>
                <div className="dining-room undo">
                  <span>dining-room</span>
                </div>
              </div>
              <div className="flex-wrap rest-space-wrap">
                <div className="flex-wrap bedroom-wrap">
                  <div className="secondary-bedroom">
                    <span>secondary-bedroom</span>
                    <div className="cloakroom">
                      <NavLink to={toObjFactory('cloakroom')}>
                        cloakroom
                      </NavLink>
                    </div>
                  </div>
                  <div className="main-bedroom">
                    <NavLink to={toObjFactory('bedroom')}>main-bedroom</NavLink>
                  </div>
                </div>
                <div className="flex-wrap miscellaneous-wrap">
                  <div className="flex-wrap miscell-left">
                    <div className="corridor undo">
                      <span>corridor</span>
                    </div>
                    <div className="flex-wrap study-and-bathroom">
                      <div className="public-bathroom">
                        <NavLink to={toObjFactory('bathroom')}>
                          public-bathroom
                        </NavLink>
                      </div>
                      <div className="study undo">
                        <span>secondary-bedroom</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-wrap miscell-right">
                    <div className="yard">
                      <NavLink to={toObjFactory('study')}>study</NavLink>
                    </div>
                    <div className="air-space" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-wrap level2">
              <div className="hallway">
                <NavLink to={toObjFactory('hallway')}>hallway</NavLink>
              </div>
              <div className="kitchen">
                <NavLink to={toObjFactory('kitchen')}>kitchen</NavLink>
              </div>
              <div className="live-balcony undo">
                <span>live-balcony</span>
              </div>
              <div className="air-space" />
            </div>
          </div>
        </ResponseFullpage>
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
