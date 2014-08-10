/**
 * View для шлюхи
 */

define([
    "backbone",
    "mustache",
    "text!modules/slut/slut.html"

    ], function(Backbone, Mustache, tplSlut) {
        return Backbone.View.extend({
            tagName: 'div',
            className: 'item',

            template: tplSlut,

            events: {
                "click .delete"         : "delete"
            },

            render: function () {
                this.$el.html(Mustache.render(this.template, this.model.toJSON()));
                return this;
            },

            delete: function(e) {
                this.collection.remove(this.model);//model.destroy
            }
        });
    }
);