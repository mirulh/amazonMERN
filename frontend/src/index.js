import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // [1]
  // <React.StrictMode>
  <StoreProvider>
    <HelmetProvider>
      {/* [3] */}
      <PayPalScriptProvider deferLoading={true}>
        <App />
      </PayPalScriptProvider>
    </HelmetProvider>
  </StoreProvider>
  // </React.StrictMode>
);

/* 

[1] What is react strict mode? 

- if you enable react strict mode, it renders the components inside your code twice for bug checking purposes. removing it will return it to normal

read more -> https://react.dev/reference/react/StrictMode

[2] import react bootstrap's directory in the index.js as well to enable bootstrap packages elsewhere

how to import: 
import 'bootstrap/dist/css/bootstrap.min.css';

[3] setting to deferLoading={true} because we don't want load paypal at the beginning of loading the application


*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
