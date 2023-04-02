const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    `Te encuentras en el servidor de Fabián. El número de puerto es ${port}`
  );
});

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
