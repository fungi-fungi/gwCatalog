const path = require('path')
const express = require('express')

const Product = require('./product.js');


module.exports = {
  routes: () => {

    const indexPath = path.join(__dirname, './index.html')

    const router = express.Router()

    router.get('/', (_, res) => {
        res.sendFile(indexPath);
    })

    router.get('/api/products', (req, res) => {
      Product
        .find({ id: { '$regex': req.query.id, '$options': 'i' }})
        .limit(10)
        .exec( (err, product) => {
          res.send(product);
        })
    })

  	return router;
  }
}
