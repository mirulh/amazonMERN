# amazonMERN

a practice on amazon clone website using MERN stack

Step by step of the development:

1. Create React App

   - Navigate to the parent folder in this case amazonMERN
   - Use the command: npx create-react-app frontend\* <- project name
   - cd frontend <- change directory to the project directory, frontend
   - npm start <- start the application in the web

   notes: React (Create React App):
   If you're using Create React App, localhost:3000 is the default address when you run npm start. You don't need to explicitly set it unless you want to change the default behavior. However, if you want to specify it explicitly, you can do so by setting the HOST and PORT environment variables before running npm start

2. Create list products

   1. create products array
   2. add product images
   3. render products
   4. style products

3. Add page routing

   1. npm i react i react-router-dom
   2. create route for home screen
   3. create route for product screen

4. Create Node.JS server

   1. Create Node.JS Server
   2. run npm init in root folder
   3. Update package.json set type: module
   4. Add .js to imports (eg. server.js)
   5. npm install express
   6. create server.js
   7. add start command as node backend/server.js
   8. require express
   9. create route for / return backend is ready.
   10. move products.js from frontend to backend
   11. create route for /api/products
   12. return products
   13. run npm start

5. Fetch Products From Backend

   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook

6. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from usReducer

7. Add bootstrap UI Framework

   1. npm install react-bootstrap bootstrap
   2. update App.js

8. Create Product and Rating Component

   1. create Rating component
   2. Create Product component
   3. Use Rating component in Product component

9. Create Product Details Screen

   1. fetch product from backend
   2. create 3 columns for image, info and action

10. Create Loading and Message Component

- create loading component
- use spinner component
- create message component
- create utils.js to define getError function

11. Create React Context For Add Item To Cart

- Create React Context
- define reducer
- create store provider
- implement add to cart button click handler

12. Complete Add To Cart

- check exist item in the cart
- check count in stock in backend

13. Create Cart Screen

- create 2 columns
- display items list
- create action column

14. Complete Cart Screen

- click handler for inc/dec item
- click handler for remove item
- click handler for checkout
