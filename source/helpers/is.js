'use strict';

module.exports = function is(a, b, options) {
  if (arguments.length < 3) {
    var fp = this.context.view.path;
    console.log('{{is}} helper is missing an argument. start by looking in: ' + fp);
    return '';
  }
  return (a === b) ? options.fn(this) : options.inverse(this);
};
