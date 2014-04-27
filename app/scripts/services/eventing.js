define([
    'backbone'
],function (Backbone) {
    'use strict';

    var Eventing = function() {};
    _.extend(Eventing, Backbone.Events);
    return Eventing;
});
