import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// [1] , [2]
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
// [3]
import UseState from './testOnly/UseState';
import UseEffect from './testOnly/UseEffect';
import UseEffect2 from './testOnly/UseEffect2';
import UseEffect3 from './testOnly/UseEffect3';
import UseEffect4 from './testOnly/UseEffect4';
import UseReducer from './testOnly/UseReducer';
import UseContext from './testOnly/UseContext';
import UseContext2 from './testOnly/UseContext2';
import UseContext3 from './testOnly/UseContext3';
import UseContext4 from './testOnly/UseContext4';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          {/* links back to the home page "/" */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        {/* main section  */}
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              {/* [3] */}
              <Route path="/useState-example" element={<UseState />} />
              <Route path="/useEffect-example" element={<UseEffect />} />
              <Route path="/useEffect2-example" element={<UseEffect2 />} />
              <Route path="/useEffect3-example" element={<UseEffect3 />} />
              <Route path="/useEffect4-example" element={<UseEffect4 />} />
              <Route path="/useReducer-example" element={<UseReducer />} />
              <Route path="/useContext-example" element={<UseContext />} />
              <Route path="/useContext2-example" element={<UseContext2 />} />
              <Route path="/useContext3-example" element={<UseContext3 />} />
              <Route path="/useContext4-example" element={<UseContext4 />} />
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

/* 

[1] default vs named import

default import: 
import Container from 'react-bootstrap/Container';

named import:
import { LinkContainer } from 'react-router-bootstrap';
 
A module can only have one default export, but as many named exports as you like (zero, one, or many). You can import them together

[2] remember to import react bootstrap inside index.js to see the changes

[3] this import is used for react hooks test only


*/
