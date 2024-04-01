// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          // [8]
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              // [7]
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                {/* [! IMP] */}
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

/* 

[! IMP]

  <Product product={product}></Product>

  explanation for this code:

  So, in summary, the <Product product={product}></Product> code is rendering the Product component and passing a prop named product with the value of the product variable to it. This allows the Product component to access and use the product data within its own implementation.


[1] loading: true, show the loading box when requesting the product data

[2] action.payload contains all product from backend, loading: false, the loading is turn off when the data is retrieved

[3] if fetch fails, turn off loading box, fill the error message with action.payload 

[4] IMPORTANT: this request will be proxy to this address to get the data -> http://localhost:5000/api/products instead of :3000. refer XHR in dev tools. Proxy is defined in the frontend package.json under "proxy": "http://localhost:5000",

[5] An alternative to use-reducer-logger package. Usage is to log out the status

[*] (...) is called spread operator (eg. ...state). Spread operator is used to create a new object or array and copy the properties or elements from an existing object or array

[6] Links product image and product name to product screen

[7] understanding grid classes sizes, the interface will be displayed according to set scale

    xs (for phones - screens less than 768px wide)
    sm (for tablets - screens equal to or greater than 768px wide)
    md (for small laptops - screens equal to or greater than 992px wide)
    lg (for laptops and desktops - screens equal to or greater than 1200px wide)

    mb-3 = add margin-bottom 3 
      (https://stackoverflow.com/questions/41574776/what-is-class-mb-0-in-bootstrap-4)


[8] passing the variant danger as props to the MessageBox component. To test out this component, set network throttling and navigate to home page. The screen will display network error message inside red label 

*/
