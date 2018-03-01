import React from 'react';
import ResponseFullpage from '../base/responseFullpage';
import './testSinglePage.css';

export default function Plan() {
  const fullPageOpt = {
    afterSectionUp() {
      console.log('afterSectionUp');
    },
    onLeave() {
      console.log('leaving now');
    }
  };
  return (
    <div className="app">
      <div className="header">header</div>

      <ResponseFullpage class={'section-first'} fullPageOpt={fullPageOpt}>
        <div className="header-section-headline">
          <p>This is a flexible fullpage component</p>
        </div>
      </ResponseFullpage>
      <ResponseFullpage class={'section-first-1'} fullPageOpt={fullPageOpt}>
        <div className="header-section-headline">
          <p>This is a flexible fullpage component</p>
        </div>
      </ResponseFullpage>
      <ResponseFullpage class={'section-first-2'} fullPageOpt={fullPageOpt}>
        <div className="header-section-headline">
          <p>This is a flexible fullpage component</p>
        </div>
      </ResponseFullpage>

      <div className="middle-content">This is a normal scroll section</div>

      <ResponseFullpage class={'section-second'} autoScroll={true}>
        <div className="header-section-headline">
          <p>it's a fullpage, but it scrolls normally</p>
        </div>
      </ResponseFullpage>

      <div className="middle-content">This is a normal scroll section</div>

      <ResponseFullpage class={'section-third'}>
        <div className="header-section-headline">
          <p>'full' scroll again!</p>
        </div>
      </ResponseFullpage>

      <div className="footer">footer</div>
    </div>
  );
}
