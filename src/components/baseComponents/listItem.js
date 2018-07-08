import React from 'react';
import './listItem.css';

export default function ListItem(props) {
  const items = props.items.slice();
  const listItems = items.map((item, index) => {
    const content = typeof item === 'string' ? item : item.content;
    return (
      <li key={index}>
        {/* 属性名避免使用原生对象的属性或者方法名,不然会出现意想不到的错误,这里如果item是string,他是有link属性的,且是一个函数,所以链接的值就不对 */}
        {typeof item.link === 'string' ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    );
  });
  return (
    <div className="component-list-item">
      <h2 className="title">{props.title || '暂无标题'}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
