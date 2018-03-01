const matchMedia = function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};
const require = {
  context() {}
};
global.matchMedia = matchMedia;
global.require = require;
