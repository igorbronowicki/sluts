/**
 * Коллекция шлюх
 */

define([
    "backbone",
    "modules/slut/SlutModel"

    ], function(Backbone, SlutModel) {
        return Backbone.Collection.extend({
            initialize: function() {
                Backbone.on('addNewModel', this.add, this);
            },
            model: SlutModel
        });
    }
);