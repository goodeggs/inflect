var data, path;

path = require('path');

data = JSON.stringify({
  version: "who cares"
});

exports.package = JSON.parse(data);

exports.version = exports.package.version;
