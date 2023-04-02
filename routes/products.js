const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  //Si no le asigno un tamaño, me van a aparecer por defecto 5 productos. Pero si en la URL pongo ?size=6 me va a mostrar 6 productos
  const limit = size || 5;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//  Al tener endpoints específicos deben ir antes de los endpoints en forma dinámica
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: 'producto 2',
    price: 2300,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
