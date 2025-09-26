import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const products = [
    {
      name: "Wireless Mouse",
      price: "25.99",
      status: "In Stock"
    },
    {
      name: "Keyboard",
      price: "45.5",
      status: "Out of Stock"
    },
    {
      name: "Monitor",
      price: "199.99",
      status: "In Stock"
    }
  ];

  return (
    <div className="app-container">
      <h1>Products List</h1>
      <div className="products-list">
        {products.map((product, index) => (
          <ProductCard
            key={index} // It's good practice to provide a unique key when mapping over an array
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;