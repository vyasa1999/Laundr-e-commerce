//Not super necessary as of now, more for sprint 3
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {type: String},
    address: {type: String},
    phone: {type: Number},
    email: {type: String},
    favorites: [String],
});

module.exports = mongoose.model('customerInfo', customerSchema);