const path = require('path')
const express = require('express')
const utils = require('./utils.js');

module.exports = {
  routes: () => {

    const indexPath = path.join(__dirname, './index.html')

    const router = express.Router()

    router.get('/', (_, res) => {
        res.sendFile(indexPath);
    })

    router.get('/api/products', (req, res) => {
      utils.queryProductsInBatch(req.query.query, req.query.offset, (result) => {
        res.send(result);
      });
    })

    router.get('/api/products/:id', (req, res) => {
      utils.queryProduct(req.params.id, (result) => {
        res.send(result);
      });
    })

  	return router;
  }
}
