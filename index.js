const express = require('express');
const routerApi = require('./routes/indexRoutes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Estás en el server de Fabián');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
