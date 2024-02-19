import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);

  // data products will be sent from the data.js file when inputting url "http://localhost:5000/api/products"
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// --- all you need to have for a simple server ---

//test that will restart and update the server
