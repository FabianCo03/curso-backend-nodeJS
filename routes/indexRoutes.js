const express = require('express');

const productsRouter = require('../routes/products');
const categoriesRouter = require('../routes/categories');
const usersRouter = require('../routes/users');
const orderRouter = require('../routes/orders');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
