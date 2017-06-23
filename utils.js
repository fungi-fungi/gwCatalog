const async = require('async');

const Product = require('./product.js');
const Category = require('./category.js');

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
      callback(results);
    });
  },

  queryCategory: (id, callback) => {

    Category.
      findOne({ mgid: id })
        .exec( (err, category) => {
          async.map(
            [category.parts, category.rentals, category.services],
            (ids, requestCallback) => {
              Product
                .find({ spec_id: { $in: ids }})
                .exec( (err, products) => {
                    requestCallback(null, products);
                })
            },
            (error, res) => {
              callback(Object.assign(
                {},
                category.toObject(),
                { parts: res[0], rentals: res[1], services: res[2] }
              ));
            }
          )
      })
  },

  queryCategoryChildren: (id, callback) => {
    Category.
      find({ parent: id })
      .exec( (err, categories) => {
        callback(categories);
      })
  },

  queryProduct: (id, callback) => {
    Product
      .findOne({ id: id })
      .exec( (err, product) => {
        callback(product);
      })
  }

}
