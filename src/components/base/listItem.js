import React from 'react';
import './listItem.css';

export default function ListItem(props) {
  const items = props.items.slice();
  const listItems = items.map(item => (
    <li key={item.id}>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer nofollow">
          {item.content}
        </a>
      ) : (
        item.content
      )}
    </li>
  ));
  return (
    <div className="component-list-item">
      {props.title && <h2 className="title">{props.title}</h2>}
      <ul>{listItems}</ul>
    </div>
  );
}
