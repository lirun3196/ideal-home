import React from "react";
import debounce from "lodash/debounce";
import "./responseFullpage.css";
import initialize from "./fullPage-simple";

export default class ResponseFullpage extends React.Component {
  constructor(props) {
    super(props);
    this.fullPage = this.fullPage.bind(this);
    this.fullPageDebounce = debounce(this.fullPage, 50, {
      leading: true,
      trailing: false
    });
  }
  fullPage(e) {
    initialize(e,this.props.fullPageOpt);
  }
  handleWheel = e => {
    // https://w3c.github.io/uievents/#cancelability-of-wheel-events
    e.preventDefault();
    const event = { deltaY: e.deltaY, currentTarget: e.currentTarget };
    this.fullPageDebounce(event);
  };
  render() {
    return (
      <div
        className={"response-header " + this.props.class}
        onWheel={this.handleWheel}
      >
        <div className="overlay" />
        <div className="background" />
        <div className="content-wrap">
          <div className="header-section">
            <div className="header-section-copy">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
