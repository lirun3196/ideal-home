import React from 'react';
import './index.css';

const Loading = ({ className = '', children }) => (
  <div className={`loading ${className}`}>{children}</div>
);
export default Loading;
