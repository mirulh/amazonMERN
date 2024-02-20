# amazonMERN

a practice on amazon clone website using MERN stack

Step by step of the development:

1. Create React App

   - Navigate to the parent folder in this case amazonMERN
   - Use the command: npx create-react-app frontend\* <- project name
   - cd frontend <- change directory to the project directory, fontend
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
