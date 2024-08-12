import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fehler beim Abrufen der Produkte:', error));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Produktliste</h1>
        <nav className="navbar">
          <a className="navbar-brand" href="/">Home</a>
          <a className="navbar-brand" href="/">Hot Deals</a>
          <a className="navbar-brand" href="/">Smartphones</a>
          <a className="navbar-brand" href="/">Laptops</a>
          <a className="navbar-brand" href="/">Cameras</a>
          <a className="navbar-brand" href="/">Accessories</a>
        </nav>
      </header>
      <div className="hero-section">
        <div className="hero-item" style={{ background: 'red' }}>Hot Deals</div>
        <div className="hero-item" style={{ background: 'blue' }}>Neue Ankünfte</div>
        <div className="hero-item" style={{ background: 'green' }}>Bestseller</div>
      </div>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product._id}>
            <div className="card">
              <img src={`/images/${product.image}`} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
