var enableStringExtensions, inflect;

inflect = require('../inflect');

enableStringExtensions = function() {
  String.prototype.pluralize = function() {
    return inflect.pluralize(this);
  };
  String.prototype.singularize = function() {
    return inflect.singularize(this);
  };
  String.prototype.camelize = function(first_letter_in_uppercase) {
    if (first_letter_in_uppercase == null) first_letter_in_uppercase = true;
    return inflect.camelize(this, first_letter_in_uppercase);
  };
  String.prototype.capitalize = function() {
    return inflect.capitalize(this);
  };
  String.prototype.titleize = function() {
    return inflect.titleize(this);
  };
  String.prototype.underscore = function() {
    return inflect.underscore(this);
  };
  String.prototype.dasherize = function() {
    return inflect.dasherize(this);
  };
  String.prototype.parameterize = function(sep) {
    if (sep == null) sep = '-';
    return inflect.parameterize(this, sep);
  };
  return String.prototype.humanize = function() {
    return inflect.humanize(this);
  };
};

exports.enableStringExtensions = enableStringExtensions;
