const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()
var Product = require("../models/productModel")

router.post('/', examples.createProduct);

router.post('/:name/:description/:stock/:price/:search', function(req, res) {
    // req.params.variable
    // Product.create({
    //     name: name
    // })
    var newProduct = new Product({
    // set attributes to req.params.attributes
    })

    Product.create(newProduct, function(err) {
        if(err) {
            throw err
        } else {
            res.send("product creation success")
        }
    }) // i think this is all that goes into creating a mongoose object but check the mongoose docs if something is wrong

})
  
module.exports = router;