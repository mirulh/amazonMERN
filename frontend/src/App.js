import data from './data';

function App() {
  return (
    <div>
      <header>
        {/* links back to the home page "/" */}
        <a href="/">amazona</a>
      </header>

      {/* main section  */}
      <main>
        <h1>Featured Products</h1>
        {/* contains the layout of all products and how they were arranged */}
        <div className="products">
          {/* import file data.js and maps all the objects and implement the following attributes for each product*/}
          {data.products.map((product) => (
            // a class product that applies to all of the items below
            // key={product.slug} is required for uniqueness else an error will be thrown in the console
            <div className="product" key={product.slug}>
              {/* link to new directory that uses the product slug as the URL for each item */}
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                {/* link to new directory that uses the product slug as the URL for each item */}
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
