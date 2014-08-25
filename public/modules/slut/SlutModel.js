/**
 * Модель шлюхи
 */

define([
    "backbone"

    ], function(Backbone) {
        return Backbone.Model.extend({
            urlRoot: '/api/sluts',
            idAttribute: "_id",
            parse: function(response) {
                response.id = response._id;
                return response;
            }
        });
    }
);