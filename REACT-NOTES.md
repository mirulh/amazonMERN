# React Components

## 1. useParams

"useParams" is a hook provided by React Router, which is a library for handling routing in React applications. 'useParams' is used specifically for accessing parameters from the URL in a React component.

How to use:

1. `import { useParams } from 'react-router-dom'`;

2. Using the Hook: You can call `useParams()` within a functional component to access the parameters from the URL

example of usage:

![alt text](useParams.png)

---

## 2. BrowserRouter

BrowserRouter is a component provided by React Router, a popular library used for handling routing in React applications. It is used to wrap the entire application and provide routing functionality to the components within it.

How to use:

1. Installation and Importing

   - `npm install react-router-dom` || `npm i react-router-dom`
   - `import { BrowserRouter } from 'react-router-dom';`

2. Wrapping the App: You wrap your entire application with the BrowserRouter component. Typically, this is done at the root level of your application, usually in the index.js or App.js file.

![alt text](reactRouter.png)

3. Routing: Once your application is wrapped with `BrowserRouter`, you can use various routing components and hooks provided by React Router, such as `Route`, `Switch`, `Link`, etc., to define and navigate between different views of your application. Import by adding,

   - `import { Route, Switch, Link } from 'react-router-dom';`

---

## 3. Link (link to) VS Anchor (a href)

- When building a single page application, use link instead of anchor to prevent the page from refreshing every time

- Link is a component from react-router-dom

How to use:

- Anchor: `<a href= "path"> Text </a>`
- Link: `<Link to= "path" > Text </Link>`
