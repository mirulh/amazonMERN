import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// process.env.MONGODB_URI is taken from url in env file
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // [1]
    console.log('connect to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);

  // data products will be sent from the data.js file when inputting url "http://localhost:5000/api/products"
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// --- all you need to have for a simple server ---

//test that will restart and update the server

/* 

[1] npm start in backend to see the connection message "connect to db" if everything goes right. Error message will log out if there invalid url


*/
