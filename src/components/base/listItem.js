import React from 'react';
import './listItem.css';

export default function ListItem(props) {
  const items = props.items.slice();
  const listItems = items.map((item, index) => (
    <li key={index}>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer nofollow">
          {item.content}
        </a>
      ) : typeof item === 'string' ? (
        item
      ) : (
        item.content
      )}
    </li>
  ));
  return (
    <div className="component-list-item">
      <h2 className="title">{props.title || '暂无标题'}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
