/**
 * singlePage, inspired by [fullPage](https://github.com/alvarotrigo/fullPage.js) and most of helpers function copy from it directly
 * MIT licensed
 *
 * Copyright (C) 2018 by Rich Lee
 */

let canScroll = true;
let options;

/**
 * @description Detecting mousewheel scrolling
 * @param {{currentTarget:Element,deltaY:number}} e
 * @param {Object} customOptions
 * @param {function} cb
 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
 */
function initialize(e, customOptions, cb) {
  const defaults = {
    scrollingSpeed: 500,
    touchSensitivity: 10,
    onLeave: null,
    scrolling: scrolling,
    afterSectionDown: null,
    afterSectionUp: null
  };
  options = Object.assign({}, defaults, customOptions || {});
  cb(e, options);
}

/**
 * Determines the way of scrolling up or down:
 * by 'automatically' scrolling a section or by using the default and normal scrolling.
 */
function scrolling(type, element, cb) {
  console.log('type-', type);
  if (type === 'down') {
    moveSectionDown(element, cb);
  } else {
    moveSectionUp(element, cb);
  }
}

function moveSectionDown(element, cb) {
  let scrollHeight = getScrollTop();
  let docHeight = document.documentElement.offsetHeight;
  let positiveHeight = getRelativePosition(element);
  let elHeight = getAbsoluteHeight(element);
  let remainHeight = docHeight - elHeight;
  let to = 0;
  /* console.log("remainHeight=", remainHeight);
  console.log("positiveHeight=", positiveHeight);
  console.log("elHeight=", elHeight); */

  if (
    positiveHeight < scrollHeight &&
    scrollHeight < positiveHeight + elHeight
  ) {
    to = positiveHeight;
  } else {
    to = remainHeight >= elHeight ? positiveHeight - elHeight : 0;
  }
  scrollTo(element, to, options.scrollingSpeed, cb);
}

function moveSectionUp(element, cb) {
  let scrollHeight = getScrollTop();
  let positiveHeight = getRelativePosition(element);
  let elHeight = getAbsoluteHeight(element);
  let to = 0;
  /* console.log("scrollHeight=", scrollHeight);
  console.log("positiveHeight=", positiveHeight);
  console.log("elHeight=", elHeight); */
  //positiveHeight === scrollHeight: the "fullpage" is in the viewport completely
  // positiveHeight + elHeight === scrollHeight: the "fullpage" is hidden up the viewport completely
  // positiveHeight-elHeight > scrollHeight: the "fullpage" is hidden down the viewport completely
  if (
    positiveHeight > scrollHeight &&
    scrollHeight < positiveHeight + elHeight
  ) {
    to = positiveHeight;
  } else {
    to = positiveHeight + elHeight;
  }
  scrollTo(element, to, options.scrollingSpeed, cb);
}

/**
 * Simulates the animated scrollTop of jQuery.
 * http://stackoverflow.com/a/16136789/1081396
 */
var activeAnimation;
function scrollTo(element, to, duration, callback) {
  let scrollHeight = getScrollTop();
  if (scrollHeight === to) {
    return;
  }
  canScroll = false;
  options.canScroll = false;
  const v = {
    callback: callback,
    element: element
  };
  isFunction(options.onLeave) && options.onLeave.call(v);
  let start = scrollHeight;
  let change = to - start;
  let currentTime = 0;
  const increment = 20;
  activeAnimation = true;

  var animateScroll = function() {
    //in order to stope it from other function whenever we want
    if (activeAnimation) {
      let val = to;

      currentTime += increment;
      val = Math.easeInOutCubic(currentTime, start, change, duration);

      window.scrollTo(0, val);

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        afterSectionLoads(v, element);
      }
    } else if (currentTime < duration) {
      afterSectionLoads(v, element);
    }
  };

  animateScroll();
  return false;
}

function afterSectionLoads(v, ele) {
  //callback (afterLoad) if the site is not just resizing and readjusting the slides
  // isFunction(options.afterLoad) &&
  //   !v.localIsResizing &&
  //   options.afterLoad.call(v.element, v.anchorLink, v.sectionIndex + 1);
  canScroll = true;
  options.canScroll = true;

  isFunction(v.callback) && v.callback.call(this, ele);
}

/* --------------- helpers  ---------------*/

//easeInOutCubic animation included in the plugin
Math.easeInOutCubic = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};

function isFunction(functionToCheck) {
  const getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]'
  );
}

// https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin
function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;
  console.log('el:', el);
  let styles = window.getComputedStyle(el);
  let margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + margin);
}

//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
function getScrollTop() {
  var doc = document.documentElement;
  return (
    (window.pageYOffset || window.scrollY || doc.scrollTop) -
    (doc.clientTop || 0)
  );
}

function getRelativePosition(element) {
  return element.offsetTop;
}

function mouseWheelHandler(e, options) {
  let value = e.deltaY;
  let delta = Math.max(-1, Math.min(1, value));

  if (canScroll) {
    //the direction of "down,up" is for page not scrollbar
    if (delta < 0) {
      options.scrolling.call(
        null,
        'down',
        e.currentTarget,
        options.afterSectionDown
      );
    } else {
      options.scrolling.call(
        null,
        'up',
        e.currentTarget,
        options.afterSectionUp
      );
    }
  }

  return false;
}

/**
 *  the touch event of React's syntheticEvent include the touches property including pageY/X,
 *  so we don't have to detect the original event object
 */
/* let isTouchDevice = navigator.userAgent.match(
  /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
); */

let touchStartY = 0;
let touchEndY = 0;
/**
 * Handler for the touch start event.
 */
function touchStartHandler(event) {
  console.log('touch start');
  let touchEvents = getEventsPage(event);
  touchStartY = touchEvents.y;
}

function touchMoveHandler(e, options) {
  if (canScroll) {
    //if theres any #
    let touchEvents = getEventsPage(e);

    touchEndY = touchEvents.y;
    /* console.log('touchStartY:',touchStartY);
    console.log('touchEndY:',touchEndY);
    console.log('getWindowHeight:',getWindowHeight());
    console.log('getWindowHeight2:',getWindowHeight() / (100 * options.touchSensitivity)); */

    //vertical scrolling (only when autoScrolling is enabled)
    //is the movement greater than the minimum resistance to scroll?
    if (
      Math.abs(touchStartY - touchEndY) >
      Number(getWindowHeight()) / (100 * Number(options.touchSensitivity))
    ) {
      if (touchStartY > touchEndY) {
        options.scrolling.call(
          null,
          'up',
          e.currentTarget,
          options.afterSectionUp
        );
      } else if (touchEndY > touchStartY) {
        options.scrolling.call(
          null,
          'down',
          e.currentTarget,
          options.afterSectionDown
        );
      }
    }
  }
}
function getWindowHeight() {
  return 'innerHeight' in window
    ? window.innerHeight
    : document.documentElement.offsetHeight;
}
/**
 * Gets the pageX and pageY properties depending on the browser.
 * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
 */
function getEventsPage(e) {
  const events = [];
  events.y = e.touches[0].pageY;
  return events;
}

export default {
  mouseWheelHandler(e, customOptions) {
    initialize(e, customOptions, mouseWheelHandler);
  },
  touchStartHandler,
  touchMoveHandler(e, customOptions) {
    initialize(e, customOptions, touchMoveHandler);
  }
};
