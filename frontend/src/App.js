import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

/* The reason why curly brackets {} are used when importing BrowserRouter from 'react-router-dom' is because BrowserRouter is a named export of the 'react-router-dom' package.

In JavaScript, when a module exports multiple items, you use curly brackets {} to specify which items you want to import. This is known as named exports. Each named export must be explicitly imported using curly brackets and the exact name of the export.*/

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          {/* links back to the home page "/" */}
          <Link to="/">amazona</Link>
        </header>
        {/* main section  */}
        <main>
          {/* adding new route to home screen by creating a path in the project directory */}
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
