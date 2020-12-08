const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: {type: String},
    paymentID: {type: String},
    name: {type: String},
    email: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
});

module.exports = mongoose.model('order', orderSchema);