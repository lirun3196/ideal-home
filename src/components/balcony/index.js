import React from 'react';
import PageTitle from '../baseComponents/pageTitle';
import WordsList from '../baseComponents/keywordsList';
import ImageDescribe from '../baseComponents/imageDescribe';
import ListItem from '../baseComponents/listItem';
import imgPaths from './imgPaths';
import './balcony.css';

export default function Balcony(props) {
  const words = [
    { id: 1, content: '阳光' },
    { id: 2, content: '分隔' },
    { id: 3, content: '江景' },
  ];
  const disadvantageItems = [
    {
      id: 1,
      content: '从玄关进入客厅,如果中间没有隔断,就能一眼看见对面的办公楼',
    },
    {
      id: 2,
      content: '是用的推拉门做的全封闭阳台，虽然灵活，但有一定的安全隐患',
    },
    { id: 3, content: '对面办公楼的反光，全天都有' },
  ];
  const advantageItems = [
    '能同时看到两江交汇,老街',
    '阳台与客厅是否打通?使用烘干机后，阳台的晾衣功能减弱',
  ];
  const desc = [
    '不打通阳台，只为一个独立的小空间',
    '打通阳台，使客厅看着更大',
    '独立的小空间',
    '扩大并独立阳台，使其作为一个完整的功能区',
  ];
  const descArr = desc.map((item, index) => ({
    path: imgPaths[index],
    title: item,
  }));
  return (
    <div className="balcony">
      <header>
        <PageTitle title={'阳台'} />
        <WordsList words={words} />
      </header>
      <article>
        <ListItem items={disadvantageItems} title="缺点" />
        <ListItem items={advantageItems} title="优点" />
        <ImageDescribe describe={descArr} />
      </article>
    </div>
  );
}
