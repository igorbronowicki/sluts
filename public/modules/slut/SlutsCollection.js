/**
 * Коллекция шлюх
 */

define([
    "backbone"

    ], function(Backbone) {
        return Backbone.Collection.extend({
            initialize: function() {
                Backbone.on('addNewModel', this.add, this);
            }
            //model: SlutModel
        });
    }
);