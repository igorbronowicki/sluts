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

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            delete: function(e) {
                this.collection.remove(this.model);//model.destroy
            }
        });
    }
);