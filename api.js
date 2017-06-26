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

    router.get('/callback', (_, res) => {
        res.sendFile(indexPath);
    })

    router.get('/home', (_, res) => {
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

    router.get('/api/categories/:id', (req, res) => {
      utils.queryCategory(req.params.id, (result) => {
        res.send(result);
      });
    })

    router.get('/api/categories/:id/children', (req, res) => {
      utils.queryCategoryChildren(req.params.id, (result) => {
        res.send(result);
      });
    })

  	return router;
  }
}
