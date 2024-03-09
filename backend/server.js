import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

// process.env.MONGODB_URI is taken from url in env file
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // [1]
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
// http://localhost:5000/api/seed

app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

/* 

[1] npm start in backend to see the connection message "connect to db" if everything goes right. Error message will log out if there invalid url


*/
