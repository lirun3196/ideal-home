import React from 'react';
import Slider from './slider';
import './slider.css';

export default function SliderImg(props) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1 /* ,
    adaptiveHeight: true */
  };
  const paths = props.paths.slice();
  // console.log(paths);
  const settings = { ...defaultSettings, ...props.settings };
  return (
    <div>
      {props.describe && <h3 className="slider-describe">{props.describe}</h3>}
      <Slider settings={settings}>
        {paths.map((item, index) => (
          <div key={index}>
            <img src={item} alt=" " />
          </div>
        ))}
      </Slider>
    </div>
  );
}