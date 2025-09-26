import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
        <p>Status: {props.status}</p>
      </div>
    </div>
  );
}

export default ProductCard;