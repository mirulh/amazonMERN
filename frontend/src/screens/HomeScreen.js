import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      // [1]
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      // [2]
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      // [3]
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]); // for useState starts with empty array

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      // [5]
      console.log('STATUS: FETCH REQUEST');
      try {
        // [4]
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        // [5]
        console.log('STATUS: FETCH SUCCESS');
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
        // [5]
        console.log('STATUS: FETCH FAIL');
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []); // empty array allows useEffect to run on the first time only

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

/* 

[1] loading: true, show the loading box when requesting the product data

[2] action.payload contains all product from backend, loading: false, the loading is turn off when the data is retrieved

[3] if fetch fails, turn off loading box, fill the error message with action.payload 

[4] IMPORTANT: this request will be proxy to this address to get the data -> http://localhost:5000/api/products instead of :3000. refer XHR in dev tools. Proxy is defined in the frontend package.json under "proxy": "http://localhost:5000",

[5] An alternative to use-reducer-logger package. Usage is to log out the status

[*] (...) is called spread operator (eg. ...state). Spread operator is used to create a new object or array and copy the properties or elements from an existing object or array


*/
