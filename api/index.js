const express = require('express');
const products = require('./products.json');

const app = express();
const port = 3000;

app.get('/products', (request, response) => {
  let findResult = products

  response.send(findResult);
});
app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
