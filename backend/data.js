import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Amirul',
      email: 'amirul@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Jimbo',
      email: 'jimbob@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // [1]
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 1.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pants',
      slug: 'adidas-fit-pants',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;

/* 

[1] _id is written with underscore to match mongodb format


*/
