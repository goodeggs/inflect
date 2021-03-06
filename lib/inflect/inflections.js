var Inflections,
  __slice = Array.prototype.slice;

Inflections = (function() {

  Inflections.instance = function() {
    return this.__instance__ || (this.__instance__ = new this);
  };

  function Inflections() {
    this.plurals = [];
    this.singulars = [];
    this.uncountables = [];
    this.humans = [];
  }

  Inflections.prototype.plural = function(rule, replacement) {
    var index;
    if (typeof rule === 'string' && (index = this.uncountables.indexOf(rule)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    if ((index = this.uncountables.indexOf(replacement)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    return this.plurals.unshift([rule, replacement]);
  };

  Inflections.prototype.singular = function(rule, replacement) {
    var index;
    if (typeof rule === 'string' && (index = this.uncountables.indexOf(rule)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    if ((index = this.uncountables.indexOf(replacement)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    return this.singulars.unshift([rule, replacement]);
  };

  Inflections.prototype.irregular = function(singular, plural) {
    var index;
    if ((index = this.uncountables.indexOf(singular)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    if ((index = this.uncountables.indexOf(plural)) !== -1) {
      this.uncountables.splice(index, 1);
    }
    if (singular[0].toUpperCase() === plural[0].toUpperCase()) {
      this.plural(new RegExp("(" + singular[0] + ")" + singular.slice(1) + "$", "i"), '$1' + plural.slice(1));
      this.plural(new RegExp("(" + plural[0] + ")" + plural.slice(1) + "$", "i"), '$1' + plural.slice(1));
      return this.singular(new RegExp("(" + plural[0] + ")" + plural.slice(1) + "$", "i"), '$1' + singular.slice(1));
    } else {
      this.plural(new RegExp("" + (singular[0].toUpperCase()) + singular.slice(1) + "$"), plural[0].toUpperCase() + plural.slice(1));
      this.plural(new RegExp("" + (singular[0].toLowerCase()) + singular.slice(1) + "$"), plural[0].toLowerCase() + plural.slice(1));
      this.plural(new RegExp("" + (plural[0].toUpperCase()) + plural.slice(1) + "$"), plural[0].toUpperCase() + plural.slice(1));
      this.plural(new RegExp("" + (plural[0].toLowerCase()) + plural.slice(1) + "$"), plural[0].toLowerCase() + plural.slice(1));
      this.singular(new RegExp("" + (plural[0].toUpperCase()) + plural.slice(1) + "$"), singular[0].toUpperCase() + singular.slice(1));
      return this.singular(new RegExp("" + (plural[0].toLowerCase()) + plural.slice(1) + "$"), singular[0].toLowerCase() + singular.slice(1));
    }
  };

  Inflections.prototype.uncountable = function() {
    var words;
    words = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return this.uncountables = this.uncountables.concat(words);
  };

  Inflections.prototype.human = function(rule, replacement) {
    return this.humans.unshift([rule, replacement]);
  };

  Inflections.prototype.clear = function(scope) {
    if (scope == null) scope = 'all';
    if (scope === 'all') {
      this.plurals = [];
      this.singulars = [];
      this.uncountables = [];
      return this.humans = [];
    } else {
      return this[scope] = [];
    }
  };

  return Inflections;

})();

exports.Inflections = Inflections;
