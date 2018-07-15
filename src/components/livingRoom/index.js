import React from 'react';
import BasePage from '../basePage/basePage';
import ImageDescribe from '../baseComponents/imageDescribe';
import imgPaths from './imgPaths';
import data from './data.json';

export default function LivingRoom() {
  const desc = [
    '留白太多，色彩对比太强烈',
    '简陋感',
    '适当留白，颜色温馨，墙画和风格很搭',
    '暖色，间接光，有型的沙发(并不实用)',
  ];
  const descArr = desc.map((item, index) => ({
    path: imgPaths[index],
    title: item,
  }));
  return (
    <BasePage data={data}>
      <ImageDescribe describe={descArr} />
    </BasePage>
  );
}
