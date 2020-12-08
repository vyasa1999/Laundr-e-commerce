//Not super necessary as of now, more for sprint 3
const mongoose = require('mongoose'),
    passportLocalMongoose = require("passport-local-mongoose");
const customerSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});
customerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('customerInfo', customerSchema);