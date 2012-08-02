path = require 'path'

data = JSON.stringify(version: "who cares")

# version information
exports.package = JSON.parse(data)
exports.version = exports.package.version
