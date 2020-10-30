const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    stock: {type: Number},
    price: {type: Number},
    search: [String],
});

module.exports = mongoose.model('productList', productSchema);