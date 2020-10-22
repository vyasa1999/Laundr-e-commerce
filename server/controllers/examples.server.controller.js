const productList = require('../models/productModel.js'),
    customerInfo = require('../models/customerModel.js');

exports.createProduct = async function(req, res) {
    const newProduct = req.body;
    if (!newProduct){
        return res.status(200).send({
            error: "newProduct not found",
          });
    }
    await new newProduct(productList).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
    res.send('world')
};