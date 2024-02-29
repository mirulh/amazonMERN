import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import UseState from './testOnly/UseState';
import UseEffect from './testOnly/UseEffect';
import UseEffect2 from './testOnly/UseEffect2';
import UseEffect3 from './testOnly/UseEffect3';
import UseEffect4 from './testOnly/UseEffect4';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';

/* The reason why curly brackets {} are used when importing BrowserRouter from 'react-router-dom' is because BrowserRouter is a named export of the 'react-router-dom' package.

In JavaScript, when a module exports multiple items, you use curly brackets {} to specify which items you want to import. This is known as named exports. Each named export must be explicitly imported using curly brackets and the exact name of the export.*/

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Educere</Navbar.Brand>
              </LinkContainer>
              <Nav className="ms-auto">
                <Link to="/favorites" className="nav-link">
                  Favorites
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            {/* adding new route to home screen by creating a path in the project directory */}
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/favorites" element={<CartScreen />} />
              {/* this route is used for testing react components. Not necessary for production */}
              <Route path="/useState-example" element={<UseState />} />
              <Route path="/useEffect-example" element={<UseEffect />} />
              <Route path="/useEffect2-example" element={<UseEffect2 />} />
              <Route path="/useEffect3-example" element={<UseEffect3 />} />
              <Route path="/useEffect4-example" element={<UseEffect4 />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
