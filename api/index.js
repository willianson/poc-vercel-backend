const express = require('express');
const products = require('./products.json');

const app = express();
const port = 3000;

app.get('/products', (request, response) => {
  let findResult = products

  if (request.query.priceLower !== undefined) {
    let temp = []
    findResult.map(product => {
      if (product.price <= Number(request.query.priceLower)) {
        temp.push(product);
      }
    });
    findResult = temp
  }

  response.send(findResult);
});

app.get('/products/:id', (request, response) => {
  const findResult = products.find(product => product.id == request.params.id)

  if (findResult === undefined) {
    response.send([]);
  } else {
    response.send(findResult);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
