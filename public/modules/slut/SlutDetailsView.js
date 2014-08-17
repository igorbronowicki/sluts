/**
 * View для шлюхи с детальным описанием
 */

define([
    "backbone",
    "doT",
    "text!modules/slut/slut.details.html"

    ], function(Backbone, doT, tplSlutDetails) {
        return Backbone.View.extend({
            tagName: 'div',
            id: 'slut-details',

            template: doT.template(tplSlutDetails),

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
    }
);