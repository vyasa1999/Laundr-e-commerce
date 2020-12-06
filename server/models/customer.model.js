//Not super necessary as of now, more for sprint 3
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

module.exports = mongoose.model('customerInfo', customerSchema);