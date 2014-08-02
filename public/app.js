;

var config = {
    'baseUrl': '/static/',
    'paths': {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'mustache': 'libs/mustache'
    },
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        }
    }
};

require.config(config);

require([
    "jquery",
    "underscore",
    "backbone",
    "mustache"

], function($, _, Backbone, Mustache) {
    'use strict';

    $(function(){
        'use strict';


        /**
         * Создание объекта нашего приложения (namespace).
         */
        window.app = {
            views: {},
            collections: {},
            models: {},
            routers: {},

            init: function() {
                app.collections.sluts = new app.collections.Sluts;
                app.collections.sluts.reset(window.whores);
                app.routers.main = new app.routers.Main;
                Backbone.history.start({pushState: true});
            }
        };


        /**
         * Router нашего приложения.
         */
        app.routers.Main = Backbone.Router.extend({
            routes: {
                "": "sluts",
                "sluts/:id": "slut",
                "*foo": "sluts"
            },
            sluts: function() {
                app.views.sluts = new app.views.Sluts({
                    collection: app.collections.sluts
                });
                $("body").empty().html(app.views.sluts.render().el);
            },
            slut: function(id) {
                app.views.slutDetails = new app.views.SlutDetails({
                    model: app.collections.sluts.get(id)
                });
                $("body").empty().html(app.views.slutDetails.render().el);
            }
        });


        // Модель шлюхи
        app.models.Slut = Backbone.Model;


        /**
         * Коллекция шлюх
         */
        app.collections.Sluts = Backbone.Collection.extend({
            model: app.models.Slut
        });


        /**
         * View для шлюх
         */
        app.views.Sluts = Backbone.View.extend({
            tagName: 'div',
            id: 'sluts',

            template: $('#tpl-sluts').html(),

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
                var view = new app.views.Slut({
                    model: model,
                    collection: this.collection
                });
                this.$(".list").append(view.render().el);
            }
        });


        /**
         * View для шлюхи
         */
        app.views.Slut = Backbone.View.extend({
            tagName: 'div',
            className: 'item',

            template: $('#tpl-slut').html(),

            events: {
                "click .delete"         : "delete"
            },

            render: function () {
                this.$el.html(Mustache.render(this.template, this.model.toJSON()));
                return this;
            },

            delete: function(e) {
                this.collection.remove(this.model);
            }
        });


        /**
         * View для шлюхи с детальным описанием
         */
        app.views.SlutDetails = Backbone.View.extend({
            tagName: 'div',
            id: 'slut-details',

            template: $('#tpl-slut-details').html(),

            render: function () {
                this.$el.html(Mustache.render(this.template, this.model.toJSON()));
                return this;
            }
        });


        /**
         * Инициализация нашего приложения
         */
        app.init();
    });

});
