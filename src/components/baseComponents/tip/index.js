import React from 'react';
import './index.css';
// TODO: loading闪现问题
const Tip = ({ className = '', children }) => (
  <div className={`tip ${className}`}>{children}</div>
);
export default Tip;
