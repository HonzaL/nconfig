
module.exports = function(options) {
  if (options === undefined || options === null) {
    // setup options 
    options = {};
  }
  // check and set default values
  if (!options.file) options.file = process.cwd() + "/config/config.js";
  if (!options.env) options.env = process.env.NODE_ENV || 'development';

  var config = require(options.file);

  return cfg(cfg({}, config.default), config[options.env] || {});
}

function cfg(target, source) {
  if (typeof source !== 'object' || Array.isArray(source)) return source;
  for (var i in source) {
    target[i] = cfg(target[i] || {}, source[i]);
  }
  return target;
}
