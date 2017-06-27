const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const api = require('./api.js')
const port = (process.env.PORT || 8080)

mongoose.Promise = require('bluebird');
mongoose.connect(
  'mongodb://' +
  process.env.DB_USER + ':' +
  process.env.DB_PASS + '@' +
  process.env.DB_HOST + ':' +
  process.env.DB_PORT + '/' +
  process.env.DB_NAME );


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
} else {
  app.use('/public', express.static(path.join(__dirname, 'public')));
}

app.listen(port)
