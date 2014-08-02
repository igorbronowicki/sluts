/**
 * View для шлюхи с детальным описанием
 */

define([
    "backbone",
    "mustache",
    "text!modules/slut/slut.details.html"

    ], function(Backbone, Mustache, tplSlutDetails) {
        return Backbone.View.extend({
            tagName: 'div',
            id: 'slut-details',

            template: tplSlutDetails,

            render: function () {
                this.$el.html(Mustache.render(this.template, this.model.toJSON()));
                return this;
            }
        });
    }
);