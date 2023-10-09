// ProductList.js
import React from 'react';
// Correct import statement
import Product from './Product1';

function ProductList() {
  const products = [
    {
      name: 'Product 1',
      description: 'This is the first product',
      price: 19.99,
    },
    {
      name: 'Product 2',
      description: 'This is the second product',
      price: 29.99,
    },
    {
      name: 'Product 3',
      description: 'This is the third product',
      price: 39.99,
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
