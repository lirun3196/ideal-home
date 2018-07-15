import React from 'react';
import '../baseComponents/fullPage-web';
import '../baseComponents/fullPage.css';
import './testFullPage.css';

export default class TestFullPage extends React.Component {
  componentDidMount() {
    console.log(window.fullpage);
    window.fullpage.initialize('#test-fullpage', {
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      css3: false,
    });
  }
  render() {
    return (
      <div id="test-fullpage">
        <div className="section " id="section0">
          <div className="content">
            <h1>fullPage.js</h1>
            <p>Javascript only version</p>
          </div>
        </div>
        <div className="section" id="section1">
          <div className="slide" id="slide1">
            <div className="content">
              <h1>No need for jQuery</h1>
              <p>5 Kb gzipped!!</p>
              <p>Improve the loading time of your site!</p>
            </div>
          </div>
          <div className="slide" id="slide2">
            <div className="content">
              <h1>Slides too!</h1>
            </div>
          </div>
          <div className="slide" id="slide2">
            <div className="content">
              <h1>More slides!</h1>
            </div>
          </div>
        </div>
        <div className="section" id="section2">
          <div className="content">
            <h1>Compatible</h1>
            <p>IE 8+ support.</p>
          </div>
        </div>
      </div>
    );
  }
}
