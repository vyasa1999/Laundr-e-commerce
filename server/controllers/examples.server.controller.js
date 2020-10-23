const productList = require('../models/productModel.js'),
    customerInfo = require('../models/customerModel.js');

exports.createProduct = async function(req, res) {
    const newProduct = req.body;
    
    if (!newProduct){
        return res.send({
           error: "newProduct not found",
          });
    }
    await new productList(newProduct).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
    res.send('world')
    
   res.send('hello world')

};