import React from 'react';
import debounce from 'lodash/debounce';
import handlers from './singlePage';
import './responseFullpage.css';

const {
  touchStartHandler,
  touchMoveHandler,
  mouseWheelHandler,
  moveSectionUp,
  moveSectionDown,
} = handlers;

export default class ResponseFullpage extends React.Component {
  constructor(props) {
    super(props);
    this.wheelDebounce = this.debounceFactory(this.wheel);
    this.touchStartDebounce = this.debounceFactory(this.touchStart);
    this.touchMoveDebounce = this.debounceFactory(this.touchMove);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.moveUp && nextProps.moveDown) {
      return;
    }
    if (nextProps.moveUp) {
      moveSectionUp(this.scrollTarget);
    }
    if (nextProps.moveDown) {
      moveSectionDown(this.scrollTarget);
    }
  }
  debounceFactory = f => {
    return debounce(f, 50, {
      leading: true,
      trailing: false,
    });
  };
  wheel = e => {
    mouseWheelHandler(e, this.props.fullPageOpt);
  };
  touchStart = e => {
    touchStartHandler(e);
  };
  touchMove = e => {
    touchMoveHandler(e, this.props.fullPageOpt);
  };
  handleWheel = e => {
    // https://w3c.github.io/uievents/#cancelability-of-wheel-events
    e.preventDefault();
    const event = { deltaY: e.deltaY, currentTarget: e.currentTarget };
    this.wheelDebounce(event);
  };
  handleTouchStart = e => {
    // e.preventDefault();
    const event = { touches: e.touches, currentTarget: e.currentTarget };
    this.touchStartDebounce(event);
  };
  handleTouchMove = e => {
    e.preventDefault();
    const event = { touches: e.touches, currentTarget: e.currentTarget };
    this.touchMoveDebounce(event);
  };
  render() {
    if (this.props.autoScroll) {
      return (
        <div
          className={'response-header ' + this.props.class}
          ref={target => {
            this.scrollTarget = target;
          }}
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
    return (
      <div
        className={'response-header ' + this.props.class}
        onWheel={this.handleWheel}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        ref={target => {
          this.scrollTarget = target;
        }}
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
