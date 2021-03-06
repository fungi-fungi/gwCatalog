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
        .find({ $or:[
          { id: { '$regex': req.query.query, '$options': 'i' }},
          { name: { '$regex': req.query.query, '$options': 'i'}}
        ]})
        .limit(10)
        .exec( (err, product) => {
          res.send(product);
        })
    })

    router.get('/api/products/:id', (req, res) => {
      Product
        .findOne({ id: req.params.id })
        .exec( (err, product) => {
          res.send(product);
        })
    })

  	return router;
  }
}
