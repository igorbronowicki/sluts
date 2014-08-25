/**
 * View для шлюхи
 */

define([
    "backbone",
    "doT",
    "text!modules/slut/slut.html"

    ], function(Backbone, doT, tplSlut) {
        return Backbone.View.extend({
            tagName: 'div',
            className: 'item',

            template: doT.template(tplSlut),

            events: {
                "click .delete": "delete"
            },

            initialize: function () {
                this.listenTo(this.model, 'destroy', this.remove);
            },

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            delete: function(e) {
                this.model.destroy({wait: true});
            }
        });
    }
);