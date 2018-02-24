import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./plan.css";
import Balcony from "./balcony";
import Bathroom from "./bathroom";
import HallWay from "./hallway";
import Bedroom from "./bedroom";
import Kitchen from "./kitchen";
import Study from "./study";
// import Cloakroom from "./cloakroom";
import LivingRoom from "./livingRoom";
import ResponseFullpage from "./base/responseFullpage";

export default class Plan extends React.Component {
  headerMounted = () => {
    console.log("header-mounted");
  };
  //http://jaketrent.com/post/addremove-classes-raw-javascript/
  hasClass = (ele, cls) => {
    return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
  };
  addClass = (element, className) => {
    element =
      typeof element === "string" ? document.querySelector(element) : element;
    if (element && !this.hasClass(element, className)) {
      element.className += " " + className;
    }
  };
  render() {
    let self = this;
    const navPageClass = "birds-view";
    const headerPageClass = "jobs";
    const fullPageOpt = {
      afterSectionUp() {
        self.addClass("." + navPageClass, "show");
      },
      onLeave(){
        console.log('leaving now');
        return false;
      }
    };
    return (
      <Router>
        <div className="app">
          <ResponseFullpage class={headerPageClass} fullPageOpt={fullPageOpt}>
            <h1 className="header-section-headline">
              "All that exists is necessary, and necessary must be good"
            </h1>
          </ResponseFullpage>
          <ResponseFullpage class={navPageClass}>
            <div className="nav-wrap">
              <div className="flex-wrap level1">
                <div className="flex-wrap active-space-wrap">
                  <div className="flex-wrap balcony-wrap">
                    <div className="air-space" />
                    <div className="main-balcony">
                      <Link to="/balcony#content">balcony</Link>
                    </div>
                  </div>
                  <div className="living-room">
                    <Link to="/livingroom">living-room</Link>
                  </div>
                  <div className="dining-room">dining-room</div>
                </div>
                <div className="flex-wrap rest-space-wrap">
                  <div className="flex-wrap bedroom-wrap">
                    <div className="secondary-bedroom">
                    secondary-bedroom
                    <div className="cloakroom">cloakroom</div>
                    </div>
                    <div className="main-bedroom">
                    <Link to="/bedroom">main-bedroom</Link>
                    </div>
                  </div>
                  <div className="flex-wrap miscellaneous-wrap">
                    <div className="flex-wrap miscell-left">
                      <div className="corridor">corridor</div>
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
                      <div className="yard">yard</div>
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
                <div className="live-balcony">live-balcony</div>
                <div className="air-space" />
              </div>
            </div>
          </ResponseFullpage>
          <div id="content" name="content">
            <Route path="/balcony" component={Balcony} />
            <Route path="/livingroom" component={LivingRoom} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/hallway" component={HallWay} />
            <Route path="/bedroom" component={Bedroom} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/study" component={Study} />
            {/* <Route path="/cloakroom" component={Cloakroom} /> */}
          </div>
        </div>
      </Router>
    );
  }
}
