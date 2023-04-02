const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Te encuentras en el servidor de Fabián.`);
});

app.get('/categories', (req, res) => {
  res.json([
    {
      toys: 'ball',
      clothes: 'shirt',
    },
  ]);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

// app.get('/users/:userId', (req, res) => {
//   const { userId } = req.params;

//   res.json({
//     userId,
//   });
// });

app.get('/products', (req, res) => {
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
app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter');
});

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: 'producto 2',
    price: 2300,
  });
});

app.get(
  '/categories/:categoryId/products/:productId/:users/:userId',
  (req, res) => {
    const { categoryId, productId, userId } = req.params;
    res.json({
      categoryId,
      productId,
      userId,
    });
  }
);

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
