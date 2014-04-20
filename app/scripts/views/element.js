define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ElementView = Backbone.View.extend({
        template: JST['app/scripts/templates/element.hbs'],

        // el: '',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return ElementView;
});
