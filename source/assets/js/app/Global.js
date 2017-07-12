// Add watch to variables
/*
Usage
window.env = 'dev';
window.watch('env', function(){
	console.log('change');
});
*/
if (!Object.prototype.watch) {
  Object.defineProperty(Object.prototype, "watch", {
    enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop, handler) {
      var
        oldval = this[prop]
        , newval = oldval
        , getter = function () {
          return newval;
        }
        , setter = function (val) {
          oldval = newval;
          return newval = handler.call(this, prop, oldval, val);
        }
      ;

      if (delete this[prop]) { // can't watch constants
        Object.defineProperty(this, prop, {
          get: getter
          , set: setter
          , enumerable: true
          , configurable: true
        });
      }
    }
  });
}

// object.unwatch
if (!Object.prototype.unwatch) {
  Object.defineProperty(Object.prototype, "unwatch", {
    enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop) {
      var val = this[prop];
      delete this[prop]; // remove accessors
      this[prop] = val;
    }
  });
}

//Global functions
//Generate unique guid
window.guid = function() {
  function _p8(s) {
    var p = (Math.random().toString(16)+"000000000").substr(2,8);
    return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
};

//Global debounce function
window.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Document Ready
/*
window.ready(() => {
  // do something
});
*/
window.ready = function(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

// Breakpoint check function
// Works up by default. Specify down with "down"
// if( window.isBreakpoint('small') ) { ... }
// if( window.isBreakpoint('small down') ) { ... }
window.isBreakpoint = function(mediaQuery) {
  let mediaQueryArr = {
    'xsmall': 0,
    'small': 480,
    'medium': 640,
    'large': 860,
    'xlarge': 1024,
    'xxlarge': 1400
  };

  let breakpointBoolean;

  if( mediaQuery.indexOf('down') >= 0 ){
    breakpointBoolean = mediaQueryArr[mediaQuery.replace(/down/g,'').replace(/ /g,'')] > window.innerWidth;
  } else if( mediaQuery.indexOf('up') >= 0 ){
    breakpointBoolean = mediaQueryArr[mediaQuery.replace(/up/g,'').replace(/ /g,'')] <= window.innerWidth;
  } else {
    breakpointBoolean = mediaQueryArr[mediaQuery] <= window.innerWidth;
  }

  if( breakpointBoolean ){
    return true;
  } else {
    return false;
  }
};

// Checkes if user clicked on scrollbar
window.clickedOnScrollbar = function(mouseX){
  if( document.getElementsByTagName('body')[0].clientWidth <= mouseX ){
    return true;
  }
};
