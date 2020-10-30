const mongoose = require('mongoose');
const products = require('./product.model')

const cartSchema = new mongoose.Schema({
    product: {type: products},
    amount: {type: Number},
});

module.exports = mongoose.model('cart', cartSchema);