const express = require('express');
const app = express();
const cors = require('cors');
const {
  models: { Product },
} = require('./db');

app.use(cors());

module.exports = app;

app.get('/', (req, res, next) => {
  res.send(`
    <html>
        <body>
            The Acme API
            <ul>
            <a href='/api/products'>/api/products</a>
            </ul>
        </body>
    </html>
    `);
});

app.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});
