const express = require('express')
const mongoose = require('mongoose')
const api = require('./api.js')
const port = (process.env.PORT || 8080)

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/gwcatalog');


const app = express()
app.use('/', api.routes());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
