const async = require('async');
const Product = require('./product.js');

module.exports = {

  queryProductsInBatch: (query, offset = 0, callback) => {
    async.parallel({
        data: (callback) => {
          Product
            .find(
              { $text: { $search: query } },
              { score: { $meta: 'textScore' } })
            .sort( { score: { $meta: 'textScore' } } )
            .limit(10)
            .skip(parseInt(offset))
            .exec( (err, products) => {
              callback(null, products);
            })
        },
        count: (callback) => {
          Product
            .find(
              { $text: { $search: query } },
              { score: { $meta: 'textScore' } })
            .count()
            .exec( (err, count) => {
              callback(null, count);
            })
        }
    },
    function(err, results) {
      if (err) {
        console.log(err);
      }

      callback(results);
    });
  },

  queryProducts: (query, callback) => {
    async.parallel({
        data: (callback) => {
          Product
            .find(
              { $text: { $search: query } },
              { score: { $meta: 'textScore' } })
            .sort( { score: { $meta: 'textScore' } } )
            .limit(10)
            .exec( (err, products) => {
              callback(null, products);
            })
        },
        count: (callback) => {
          Product
            .find(
              { $text: { $search: query } },
              { score: { $meta: 'textScore' } })
            .count()
            .exec( (err, count) => {
              callback(null, count);
            })
        }
    },
    function(err, results) {
      if (err) {
        console.log(err);
      }

      callback(results);
    });
  },

  queryProduct: (id, callback) => {
    Product
      .findOne({ id: id })
      .exec( (err, product) => {
        callback(product);
      })
  }

}
