define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Emoji = Backbone.Model.extend({
        defaults: {
            value: 'asdfasdf' // ''
        }
    });

    return Emoji;
});
