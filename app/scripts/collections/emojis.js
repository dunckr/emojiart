define([
    'underscore',
    'backbone',
    'models/emoji'
], function (_, Backbone, Emoji) {
    'use strict';

    var Emojis = Backbone.Collection.extend({
        model: Emoji,

        initialize: function() {
            var self = this;
            _(100).times(function(number) {
                self.add(new Emoji({value: ''+number}));
            })
        }
    });

    return Emojis;
});
