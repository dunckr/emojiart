define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Emoji = Backbone.Model.extend({
        defaults: {
            value: ':white_large_square:'
        }
    });

    return Emoji;
});
