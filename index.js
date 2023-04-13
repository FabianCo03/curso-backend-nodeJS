const express = require('express');
const routerApi = require('./routes/indexRoutes');
const app = express();
const port = 3000;
// Los middlewares de tipo error se deben hacer luego de definir el routing
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Estás en el server de Fabián');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
