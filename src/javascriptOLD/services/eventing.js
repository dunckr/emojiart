var _ = require('underscore'),
  Backbone = require('backbone');

var Eventing = function() {};
_.extend(Eventing, Backbone.Events);

module.exports = Eventing;
