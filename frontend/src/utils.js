export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

/* 


if return error.response and error.response.data.message exist, return error.response.data.message (message from the server) ->

res.status(404).send({ message: 'Product not found' });

else return the GENERAL ERROR message, error.message




this code retrieve the error message from the backend server.js when user inputting invalid product slug. Eg. "http://localhost:5000/api/products/slug/nikeys-slim". The message displayed is "Product not found"


This will retrieve the error message and use it in the frontend instead

*/
