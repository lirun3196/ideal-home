/**
 * Simulates the animated scrollTop of jQuery.
 * http://stackoverflow.com/a/16136789/1081396
 */
//easeInOutCubic animation included in the plugin
Math.easeInOutCubic = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};
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
    element: element,
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
