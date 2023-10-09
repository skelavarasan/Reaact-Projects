// Product.js
import React from 'react';

function Product1(props) {
  const { name, description, price } = props; // Destructuring props

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

export default Product1;
