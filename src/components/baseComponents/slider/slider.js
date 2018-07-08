import React from 'react';
import Swiper from 'react-slick';
import './slick.min.css';
import './slick-theme.min.css';
import './slider.css';

export default function Slider(props) {
  return (
    <div className="component-slider">
      <Swiper {...props.settings}>{props.children}</Swiper>
    </div>
  );
}
