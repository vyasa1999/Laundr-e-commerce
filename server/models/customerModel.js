// Importing mongoose
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {type: String},
    address: {type: String},
    phone: {type: Number},
    email: {type: String},
    favorites: [String],
});

module.exports = mongoose.model('customerInfo', customerSchema);