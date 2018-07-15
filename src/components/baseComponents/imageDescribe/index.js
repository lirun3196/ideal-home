import React from 'react';
import './index.css';

export default function ImageDescribe({ describe }) {
  const describeList = describe.map((item, index) => (
    <React.Fragment key={index}>
      <dt className="example-title">{item.title}</dt>
      <dd className="example-content">
        <img src={item.path} alt="" />
      </dd>
    </React.Fragment>
  ));
  return (
    <div>
      <dl className="example">{describeList}</dl>
    </div>
  );
}
