const productController = require('../controllers/products.controller.js'),
    express = require('express'), 
    router = express.Router()
var Product = require("../models/product.model")

//router.post('/', productController.createProduct);

router.post('/:name/:stock/:price', function(req, res) {
    name = req.params.name;
    stock = req.params.stock;
    price = req.params.price;
    var newProduct = new Product({
        name: name,
        stock: stock,
        price: price,
        
    });

    Product.create(newProduct, function(err) {
        if(err) {
            throw err
        } else {
            console.log(newProduct._id);
            res.send("product creation success")
        }
    }); // i think this is all that goes into creating a mongoose object but check the mongoose docs if something is wrong

});

module.exports = router;