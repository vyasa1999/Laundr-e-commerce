const productController = require('../controllers/cart.controller.js'),
    express = require('express'), 
    router = express.Router()
const config = require('../config/config.js');
var stripe = require('stripe')(config.Stripe.SID);
var products = require("../models/product.model");
var cart = require("../models/cart.model");

//router.post('/', productController.createProduct);

router.post('/:id/:quantity', function(req, res) {
    _id = req.params.id;
    quantity = req.params.quantity;

    if (products.findById(id) == null){
        return res.send({
           error: "product not found",
          });
    }

    if(!req.session.cart){
        var newCart = new cart({
        item: {
            id: _id,
            quantity: quantity,
            itemtotalCost: products.findById(id).price.value * quantity,
        },
        totalQuanity: quantity,
        totalCost: products.findById(id).price * quantity,
        });

        cart.create(newcart, function(err){
            if(err) {
                throw err
            } else {
                res.send("cart created")
            }
        })
    }
    else{
        let _item = req.session.cart.item.find({id : _id});
        var newcart = new cart({
            item: {
                id: _id,
                quantity: quantity,
                itemtotalCost: products.findById(id).price.value * quantity,
            },
            totalQuanity: req.session.cart.totalQuanity + quantity,
            totalCost: req.session.cart.totalCost + products.findById(id).price * quantity,
        });

        cart.create(newcart, function(err){
            if(err) {
                throw err
            } else {
                res.send("cart created")
            }
        })
    }

    //req.session.temp = name;

})

router.post('/checkout', function(req,res){
    stripe.charges.create({

    }, function(err, charge){

    })

    

})

module.exports = router;