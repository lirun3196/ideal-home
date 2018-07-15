import React from 'react';
import Slider from './slider';
import './slider.css';

export default function SliderImg(props) {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };
  const paths = props.paths.slice();
  // console.log(paths);
  const settings = { ...defaultSettings, ...props.settings };
  return (
    <div>
      {props.describe && <h3 className="slider-describe">{props.describe}</h3>}
      {paths.length === 1 ? (
        <img src={paths[0]} alt="" className="slide-lonely" />
      ) : (
        <Slider settings={settings}>
          {paths.map((item, index) => (
            <div key={index}>
              <img src={item} alt=" " />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
