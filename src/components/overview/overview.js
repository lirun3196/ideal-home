import React from 'react';
import BasePage from '../basePage/basePage';
import data from './data.json';
import { NavLink } from 'react-router-dom';
import hxt from './img/hxt.jpg';
import './overview.css';
const sliders = [{ paths: [hxt], describe: '户型图:' }];
const Overview = () => (
  <BasePage data={data} sliders={sliders}>
    <NavLink to="/home/livingroom" className="detail-link">
      查看具体需求
    </NavLink>
  </BasePage>
);

export default Overview;
