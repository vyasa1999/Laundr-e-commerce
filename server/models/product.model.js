const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String},
    stock: {type: Number},
    price: {type: Number},
});

module.exports = mongoose.model('productList', productSchema);