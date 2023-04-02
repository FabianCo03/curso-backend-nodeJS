const productsRouter = require('./products.js');
const usersRouter = require('./users.js');
const categoriesRouter = require('./categories.js');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}
module.exports = routerApi;
