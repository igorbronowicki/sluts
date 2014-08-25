/**
 * Коллекция шлюх
 */

define([
    "backbone",
    "modules/slut/SlutModel"

    ], function(Backbone, SlutModel) {
        return Backbone.Collection.extend({
            initialize: function() {
                Backbone.on('addNewModel', this.create, this);
            },
            model: SlutModel,
            url: '/api/sluts',
            parse: function(response) {
                return response.sluts;
            }
        });
    }
);