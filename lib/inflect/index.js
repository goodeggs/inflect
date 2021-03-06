var Inflections, inflections, methods, number_extensions, string_extensions, version;

version = require('./version');

exports.package = version.package;

exports.version = version.version;

Inflections = require('./inflections').Inflections;

inflections = function(callback) {
  if (callback != null) callback.call(this, Inflections.instance());
  return Inflections.instance();
};

exports.Inflections = Inflections;

exports.inflections = inflections;

methods = require('./methods');

exports.camelize = methods.camelize;

exports.underscore = methods.underscore;

exports.dasherize = methods.dasherize;

exports.titleize = methods.titleize;

exports.capitalize = methods.capitalize;

exports.pluralize = methods.pluralize;

exports.singularize = methods.singularize;

exports.humanize = methods.humanize;

exports.ordinalize = methods.ordinalize;

exports.parameterize = methods.parameterize;

string_extensions = require('./string_extensions');

number_extensions = require('./number_extensions');

exports.enableStringExtensions = string_extensions.enableStringExtensions;

exports.enableNumberExtensions = number_extensions.enableNumberExtensions;

exports.enableExtensions = function() {
  string_extensions.enableStringExtensions();
  return number_extensions.enableNumberExtensions();
};

require('./default_inflections');
