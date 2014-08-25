/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

/**
 * Slut Schema
 */

var SlutSchema = new Schema({
    "name": String,
    "age": String,
    "boobs": String,
    "weight": String,
    "height": String,
    "phone": String,
    "can_come": String,
    "teaser": String
});

mongoose.model('Slut', SlutSchema);