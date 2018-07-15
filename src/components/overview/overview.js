import React from 'react';
import BasePage from '../basePage/basePage';
import ImageDescribe from '../../components/baseComponents/imageDescribe';
import data from './data.js';
import { NavLink } from 'react-router-dom';
import hxt from './img/hxt.jpg';
import './overview.css';

const sliders = [{ paths: [hxt], describe: '户型图:' }];
const Overview = () => (
  <BasePage data={data} sliders={sliders}>
    <ImageDescribe describe={data.describe} />
    <NavLink to="/home/livingroom" className="detail-link">
      查看具体需求
    </NavLink>
  </BasePage>
);

export default Overview;
