import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from './MessageBox';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]); // for useState starts with empty array

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []); // empty array allows useEffect to run on the first time only

  return (
    <div>
      <Helmet>
        <title>Educere</title>
      </Helmet>
      <h1>Featured Resources</h1>
      {/* contains the layout of all products and how they were arranged */}
      <div className="products">
        {/* import file data.js and maps all the objects and implement the following attributes for each product*/}
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              // a class product that applies to all of the items below
              // key={product.slug} is required for uniqueness else an error will be thrown in the console
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

/* NOTES

const result = await axios.get('/api/products'); //IMPORTANT: this request will be proxy to this address to get the data -> http://localhost:5000/api/products instead of :3000. refer XHR in dev tools. Proxy is defined in the frontend package.json under "proxy": "http://localhost:5000" 


on the self closing component,
<LoadingBox />

explanation:
https://stackoverflow.com/questions/48991212/react-component-closing-tag
*/
