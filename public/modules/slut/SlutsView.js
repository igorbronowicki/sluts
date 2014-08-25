/**
 * View для шлюх
 */

define([
    "backbone",
    "doT",
    "text!modules/slut/sluts.html",
    "modules/slut/SlutView",
    "modules/slut/SlutFormView"

    ], function(Backbone, doT, tplSluts, SlutView, SlutFormView) {
        return Backbone.View.extend({
            tagName: 'div',
            id: 'sluts',

            template: doT.template(tplSluts),

            initialize: function() {
                this.listenTo(this.collection, 'add', this.addOne);
                this.listenTo(this.collection, 'reset', this.render);
                this.collection.fetch({reset: true});
            },

            events: {
                'click .show-form': 'showForm'
            },

            render: function(){
                this.$el.html(this.template());
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