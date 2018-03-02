// Libs
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Plan from './components/plan';
import TestSinglePage from './components/testSth/testSinglePage.js';
/* import BasePage from "./components/basePage/basePage";

import Balcony from "./components/balcony";
import LivingRoom from "./components/livingRoom";

import bathroomData from "./components/bathroom/data.json";
import bathroomImgPaths from "./components/bathroom/imgPaths.js";

import bedroomData from "./components/bedroom/data.json";
import bedroomImgPaths from "./components/bedroom/imgPaths.js";

import cloakroomData from "./components/cloakroom/data.json";
import cloakroomImgPaths from "./components/cloakroom/imgPaths.js";

import hallWayData from "./components/hallway/data.json";
import hallWayImgPaths from "./components/hallway/imgPaths.js";

import kitchenData from "./components/kitchen/data.json";
import KitchenImgPaths from "./components/kitchen/imgPaths.js";

import studyData from "./components/study/data.json";
import studyImgPaths from "./components/study/imgPaths";

const pageFactory = (data, imgPaths) => (
  <BasePage data={data} sliders={[{ paths: imgPaths }]} />
);

// Components --  Plan
const Bathroom = () => pageFactory(bathroomData, bathroomImgPaths);
const Bedroom = () => pageFactory(bedroomData, bedroomImgPaths);
const Cloakroom = () => pageFactory(cloakroomData, cloakroomImgPaths);
const HallWay = () => pageFactory(hallWayData, hallWayImgPaths);
const Kitchen = () => pageFactory(kitchenData, KitchenImgPaths);
const Study = () => pageFactory(studyData, studyImgPaths); */

// Routes
// contain all routes into a variable to be imported into index.js
const routes = (
  <Router>
    {/* If path is / then load the Plan component */}
    <App>
      <Switch>
        <Route exact path="/" component={TestSinglePage} />
        <Route path="/home" component={Plan} />
        <Route path="/testSinglePage" component={TestSinglePage} />
      </Switch>
    </App>
  </Router>
);

export default routes;
