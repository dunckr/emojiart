define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CellModel = Backbone.Model.extend({

        defaults: {
            value: ' - '
        }

    });
    return CellModel;
});
