import React from 'react';
import BasePage from '../basePage/basePage';
import imgPathsDiss from './imgPathsDiss';
import imgPathsLike from './imgPathsLike';
import data from './data.json';

export default function LivingRoom() {
  const sliders = [
    { paths: imgPathsLike, describe: '简洁:' },
    { paths: imgPathsDiss, describe: '简陋:' },
  ];
  return <BasePage data={data} sliders={sliders} />;
}
