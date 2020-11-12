const mongoose = require('mongoose');
const products = require('./product.model')

const cartSchema = new mongoose.Schema({
    item: [{
        id: {type: String},
        quantity: {type: Number},
        itemtotalCost: {type: Number},
    }],
    totalQuanity: {type: Number},
    totalCost: {type: Number},
});

module.exports = mongoose.model('cart', cartSchema);