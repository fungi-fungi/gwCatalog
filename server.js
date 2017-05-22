const path = require('path')
const express = require('express')
const bodyParser = require("body-parser")
const mongodb = require("mongodb")

module.exports = {
  app: function () {

    var PRODUDCTS_COLLECTION = "products"


    const app = express()
    app.use(bodyParser.json())

    let db;

    const monogo_uri = 'mongodb://localhost:27017/gwCatalog'

    mongodb.MongoClient.connect(monogo_uri, function (err, database) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      db = database;
      console.log("Database connection ready");

    });

    function handleError(res, reason, message, code) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({"error": message});
    }

    const indexPath = path.join(__dirname, './index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)

    app.get('/', (_, res) => { res.sendFile(indexPath); })

    app.get('/api/products', (req, res) => {
      db.collection(PRODUDCTS_COLLECTION).find({}).toArray( (err, docs) => {
        if (err) {
          handleError(res, err.message, "Failed to get contacts.");
        } else {
          res.status(200).json(docs);
        }
      })
    })

    return app
  }
}
