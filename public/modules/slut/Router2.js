/**
 * Router нашего приложения.
 */

define([
    "backbone",
    "modules/slut/SlutDetailsView",
    "modules/slut/SlutsView",
    "modules/slut/SlutsCollection"

    ], function(Backbone, SlutDetailsView, SlutsView, SlutsCollection) {
        var slutsCollection = new SlutsCollection;
        slutsCollection.reset(window.whores);

        return Backbone.Router.extend({
            routes: {
                "": "sluts",
                "sluts/:id": "slut",
                "*foo": "sluts"
            },
            sluts: function() {
                var slutsView = new SlutsView({
                    collection: slutsCollection
                });
                $("body").empty().html(slutsView.render().el);
            },
            slut: function(id) {
                var slutDetailsView = new SlutDetailsView({
                    model: slutsCollection.get(id)
                });
                $("body").empty().html(slutDetailsView.render().el);
            }
        });
    }
);
