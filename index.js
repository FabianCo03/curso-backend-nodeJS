const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Te encuentras en el servidor de Fabián.`);
});

app.get('/nueva-ruta', (req, res) => {
  res.json({
    intro: 'soy una nueva ruta en formato json',
    name: 'nueva-ruta',
  });
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'producto 1',
    price: 1250,
  });
});

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
