/**
 * View анкеты для шлюхи
 */

define([
    "backbone",
    "doT",
    "text!modules/slut/slut.form.html"

    ], function(Backbone, doT, tplSlutForm) {
        return Backbone.View.extend({
            id: 'slut-form',

            events: {
                'click .add': 'add'
            },

            template: doT.template(tplSlutForm),

            render: function(){
                this.$el.html(this.template());
                return this;
            },

            add: function() {
                Backbone.trigger('addNewModel', this.getData());
                this.remove();
            },

            getData: function() {
                var girl = {
                    'name': this.$el.find('[name="name"]').val() || 'Ева',
                    'age': this.$el.find('[name="age"]').val() || '21',
                    'boobs': this.$el.find('[name="boobs"]').val() || '3',
                    'weight': this.$el.find('[name="weight"]').val() || '48',
                    'height': this.$el.find('[name="height"]').val() || '170',
                    'phone': this.$el.find('[name="phone"]').val() || '+380960001100',
                    'can_come': this.$el.find('[name="can_come"]').val() || true,
                    'teaser': this.$el.find('[name="teaser"]').val() || ':-*'
                };

                return girl;
            }
        });
    }
);