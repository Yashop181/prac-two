const path = require("path");

module.exports = function override(config, env) {
  // keep CRA config as is
  return config;
};

// change build output directory from "build" → "dist"
module.exports.paths = function (paths, env) {
  paths.appBuild = path.resolve(__dirname, "dist");
  return paths;
};
