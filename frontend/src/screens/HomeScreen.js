import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import data from '../data';

function HomeScreen() {
  const [products, setProducts] = useState([]); // for useState starts with empty array

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products'); //IMPORTANT: this request will be proxy to this address to get the data -> http://localhost:5000/api/products instead of :3000. refer XHR in dev tools. Proxy is defined in the frontend package.json under "proxy": "http://localhost:5000",

      setProducts(result.data);
    };
    fetchData();
  }, []); // empty array allows useEffect to run on the first time only

  return (
    <div>
      <h1>Featured Products</h1>
      {/* contains the layout of all products and how they were arranged */}
      <div className="products">
        {/* import file data.js and maps all the objects and implement the following attributes for each product*/}
        {products.map((product) => (
          // a class product that applies to all of the items below
          // key={product.slug} is required for uniqueness else an error will be thrown in the console
          <div className="product" key={product.slug}>
            {/* link to new directory that uses the product slug as the URL for each item */}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              {/* link to new directory that uses the product slug as the URL for each item */}
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
