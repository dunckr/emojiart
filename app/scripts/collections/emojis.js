define([
    'underscore',
    'backbone',
    'models/emoji'
], function (_, Backbone, Emoji) {
    'use strict';

    var Emojis = Backbone.Collection.extend({
        model: Emoji
    });

    return Emojis;
});
