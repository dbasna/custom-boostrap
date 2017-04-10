var
  config = require("../config.json"),
  path = require("path");

module.exports = function(simplePath) {

  var pathToLib = path.join(
    config.tasks.css.library,
    config.tasks.css.files
  );

  return [simplePath, pathToLib];

};
