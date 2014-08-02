;

var config = {
    'baseUrl': '/static/',
    'paths': {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'mustache': 'libs/mustache',
        'text': 'libs/require.text'
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
    "mustache",
    "modules/slut/SlutDetailsView",
    "modules/slut/SlutsView",
    "modules/slut/SlutsCollection"

], function($, _, Backbone, Mustache, SlutDetailsView, SlutsView, SlutsCollection) {
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
                app.collections.sluts = new SlutsCollection;
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
                app.views.sluts = new SlutsView({
                    collection: app.collections.sluts
                });
                $("body").empty().html(app.views.sluts.render().el);
            },
            slut: function(id) {
                app.views.slutDetails = new SlutDetailsView({
                    model: app.collections.sluts.get(id)
                });
                $("body").empty().html(app.views.slutDetails.render().el);
            }
        });


        /**
         * Инициализация нашего приложения
         */
        app.init();
    });

});
