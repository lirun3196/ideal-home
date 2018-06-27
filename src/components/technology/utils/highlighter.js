import React from 'react';
import Shl from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism/coy';

export const Highlighter = props => (
  <React.Fragment>
    <Shl language={props.language || 'javascript'} style={coy}>
      {props.children}
    </Shl>
  </React.Fragment>
);
