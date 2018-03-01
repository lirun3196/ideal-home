import React from 'react';
import BasePage from '../basePage/basePage';
import imgPathsDiss from './imgPathsDiss';
import imgPathsLike from './imgPathsLike';
import data from './data.json';

export default function LivingRoom() {
  const sliders = [
    { paths: imgPathsLike, describe: 'Like:' },
    { paths: imgPathsDiss, describe: 'Diss:' }
  ];
  return <BasePage data={data} sliders={sliders} />;
}
