/**
 * View для шлюх
 */

define([
    "backbone",
    "mustache",
    "text!modules/slut/sluts.html",
    "modules/slut/SlutView",
    "modules/slut/SlutFormView"

    ], function(Backbone, Mustache, tplSluts, SlutView, SlutFormView) {
        return Backbone.View.extend({
            tagName: 'div',
            id: 'sluts',

            template: tplSluts,

            initialize: function() {
                this.listenTo(this.collection, 'all', this.render);
                this.listenTo(this.collection, 'add', this.addOne);
            },

            events: {
                'click .show-form': 'showForm'
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
            },

            showForm: function() {
                var form = new SlutFormView();
                this.$(".form").html(form.render().el);
            }
        });
    }
);