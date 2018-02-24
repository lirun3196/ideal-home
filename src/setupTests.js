const matchMedia = function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
global.matchMedia = matchMedia;