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
                slutsCollection.fetch({
                    success: function(collection) {
                        var slutDetailsView = new SlutDetailsView({
                            model: collection.get(id)
                        });
                        $("body").empty().html(slutDetailsView.render().el);
                    }
                });
            }
        });
    }
);
