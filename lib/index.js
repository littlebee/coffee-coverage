// Generated by CoffeeScript 1.12.4
(function() {
  exports.register = require('./register');

  exports.CoverageInstrumentor = require('./coffeeCoverage').CoverageInstrumentor;

  exports.findIstanbulVariable = require('./instrumentors/Istanbul').findIstanbulVariable;

  require('pkginfo')(module, 'version', 'author', 'contributors');

}).call(this);