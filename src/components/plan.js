import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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

import ResponseFullpage from './base/responseFullpage';
import './plan.css';

const pageFactory = (data, imgPaths) => (
  <BasePage data={data} sliders={[{ paths: imgPaths }]} />
);

const Bathroom = () => pageFactory(bathroomData, bathroomImgPaths);
const Bedroom = () => pageFactory(bedroomData, bedroomImgPaths);
const Cloakroom = () => pageFactory(cloakroomData, cloakroomImgPaths);
const HallWay = () => pageFactory(hallWayData, hallWayImgPaths);
const Kitchen = () => pageFactory(kitchenData, KitchenImgPaths);
const Study = () => pageFactory(studyData, studyImgPaths);

export default class Plan extends React.Component {
  //http://jaketrent.com/post/addremove-classes-raw-javascript/
  hasClass = (ele, cls) => {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };
  addClass = (element, className) => {
    element =
      typeof element === 'string' ? document.querySelector(element) : element;
    if (element && !this.hasClass(element, className)) {
      element.className += ' ' + className;
    }
  };
  render() {
    let self = this;
    const navPageClass = 'birds-view';
    const headerPageClass = 'jobs';
    const fullPageOpt = {
      afterSectionUp() {
        self.addClass('.' + navPageClass, 'show');
      },
      onLeave() {
        console.log('leaving now');
        return false;
      }
    };
    return (
      <Router>
        <div className="app">
          <ResponseFullpage class={headerPageClass} fullPageOpt={fullPageOpt}>
            <div className="header-section-headline">
              <p>All exists is necessary,</p>
              <p>necessary must be good</p>
            </div>
          </ResponseFullpage>
          <ResponseFullpage class={navPageClass}>
            <div className="nav-wrap">
              <div className="flex-wrap level1">
                <div className="flex-wrap active-space-wrap">
                  <div className="flex-wrap balcony-wrap">
                    <div className="air-space" />
                    <div className="main-balcony">
                      <Link to="/balcony">balcony</Link>
                    </div>
                  </div>
                  <div className="living-room">
                    <Link to="/livingroom">living-room</Link>
                  </div>
                  <div className="dining-room undo">
                    <a href="###">dining-room</a>
                  </div>
                </div>
                <div className="flex-wrap rest-space-wrap">
                  <div className="flex-wrap bedroom-wrap">
                    <div className="secondary-bedroom undo">
                      <a href="###">secondary-bedroom</a>
                      <div className="cloakroom">
                        <Link to="/cloakroom">cloakroom</Link>
                      </div>
                    </div>
                    <div className="main-bedroom">
                      <Link to="/bedroom">main-bedroom</Link>
                    </div>
                  </div>
                  <div className="flex-wrap miscellaneous-wrap">
                    <div className="flex-wrap miscell-left">
                      <div className="corridor undo">
                        <a href="###">corridor</a>
                      </div>
                      <div className="flex-wrap study-and-bathroom">
                        <div className="public-bathroom">
                          <Link to="/bathroom">public-bathroom</Link>
                        </div>
                        <div className="study">
                          <Link to="/study">study</Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex-wrap miscell-right">
                      <div className="yard undo">
                        <a href="###">yard</a>
                      </div>
                      <div className="air-space" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-wrap level2">
                <div className="hallway">
                  <Link to="/hallway">hallway</Link>
                </div>
                <div className="kitchen">
                  <Link to="/kitchen">kitchen</Link>
                </div>
                <div className="live-balcony undo">
                  <a href="###">live-balcony</a>
                </div>
                <div className="air-space" />
              </div>
            </div>
          </ResponseFullpage>
          <div id="content" name="content">
            <Route exact path="/" component={LivingRoom} />
            <Route path="/balcony" component={Balcony} />
            <Route path="/livingroom" component={LivingRoom} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/hallway" component={HallWay} />
            <Route path="/bedroom" component={Bedroom} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/study" component={Study} />
            <Route path="/cloakroom" component={Cloakroom} />
          </div>
        </div>
      </Router>
    );
  }
}
