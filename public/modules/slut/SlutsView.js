/**
 * View для шлюх
 */

define([
    "backbone",
    "mustache",
    "text!modules/slut/sluts.html",
    "modules/slut/SlutView"

    ], function(Backbone, Mustache, tplSluts, SlutView) {
        return Backbone.View.extend({
            tagName: 'div',
            id: 'sluts',

            template: tplSluts,

            initialize: function() {
                this.listenTo(this.collection, 'all', this.render);
            },

            render: function(){
                this.$el.html(Mustache.render(this.template, {}));
                this.$(".list").empty();
                this.collection.each(this.addOne, this);
                return this;
            },

            addOne: function (model) {
                var view = new SlutView({
                    model: model,
                    collection: this.collection
                });
                this.$(".list").append(view.render().el);
            }
        });
    }
);