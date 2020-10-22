// Importing mongoose
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    stock: {type: Number, required: true},
    price: {type: Number, required: true},
    search: [String],
});

module.export = mongoose.model('productList', productSchema);