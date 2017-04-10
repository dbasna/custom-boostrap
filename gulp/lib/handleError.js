var notify = require("gulp-notify");

module.exports = function(errorObject, callback) {

  // notify.onError(errorObject.toString().split(': ').join(':\n'))
  //   .apply(this, arguments);
  //
  notify.onError(errorObject)
    .apply(this, arguments);

  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') this.emit('end')

};
