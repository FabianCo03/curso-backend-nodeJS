const express = require('express');
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

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  res.json({
    userId,
  });
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: 1000,
    },
    {
      name: 'producto 2',
      price: 2300,
    },
  ]);
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
