const productController = require('../controllers/products.controller.js'),
    express = require('express'), 
    router = express.Router()
var Product = require("../models/product.model")

//router.post('/', productController.createProduct);

router.post('/:name/:description/:stock/:price', function(req, res) {
    name = req.params.name;
    description = req.params.description;
    stock = req.params.stock;
    price = req.params.price;
    var newProduct = new Product({
        name: name,
        description: description,
        stock: stock,
        price: price,
        
    });

    Product.create(newProduct, function(err) {
        if(err) {
            throw err
        } else {
            res.send("product creation success")
        }
    }); // i think this is all that goes into creating a mongoose object but check the mongoose docs if something is wrong

});
  
module.exports = router;