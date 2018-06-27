import React from 'react';
import './keywordsList.css';

export default function KeywordsList(props) {
  const words = props.words.slice();
  const wordsList = words.map((item, index) => (
    <li key={index}>{typeof item === 'string' ? item : item.content}</li>
  ));
  return <ul className="keys-list">{wordsList} </ul>;
}
