import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Deine benutzerdefinierte CSS-Datei

const allProducts = [
  { name: "Sample Product", price: 19.99, description: "This is a sample product.", image: "/images/sample_product.jpg" },
  { name: "New Product", price: 29.99, description: "This is a new product.", image: "/images/new_product.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "This is a sample product.", image: "/images/iphone_15.jpg" },
  { name: "Tab 8", price: 119.99, description: "This is a sample product.", image: "/images/tab_8.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "This is a sample product.", image: "/images/iphone_14.jpg" }
];

const laptopProducts = [
  { name: "Laptop 1", price: 999.99, description: "High performance laptop.", image: "/images/laptop_1.jpg" },
  { name: "Laptop 2", price: 899.99, description: "Affordable laptop.", image: "/images/laptop_2.jpg" },
  { name: "Laptop 3", price: 799.99, description: "Compact and portable.", image: "/images/laptop_3.jpg" },
  { name: "Laptop 4", price: 1099.99, description: "Powerful gaming laptop.", image: "/images/laptop_4.jpg" },
  { name: "Laptop 5", price: 1299.99, description: "Business laptop.", image: "/images/laptop_5.jpg" },
  { name: "Laptop 6", price: 699.99, description: "Budget laptop.", image: "/images/laptop_6.jpg" }
];

const hotDealsProducts = [
  { name: "Hot Deal 1", price: 499.99, description: "Limited time offer.", image: "/images/hot_deal_1.jpg" },
  { name: "Hot Deal 2", price: 299.99, description: "Discounted product.", image: "/images/hot_deal_2.jpg" }
];

const smartphoneProducts = [
  { name: "Smartphone 1", price: 699.99, description: "Latest smartphone.", image: "/images/smartphone_1.jpg" },
  { name: "Smartphone 2", price: 599.99, description: "Budget smartphone.", image: "/images/smartphone_2.jpg" }
];

const cameraProducts = [
  { name: "Camera 1", price: 899.99, description: "High quality camera.", image: "/images/camera_1.jpg" },
  { name: "Camera 2", price: 499.99, description: "Compact camera.", image: "/images/camera_2.jpg" }
];

const accessoryProducts = [
  { name: "Accessory 1", price: 49.99, description: "Useful accessory.", image: "/images/accessory_1.jpg" },
  { name: "Accessory 2", price: 19.99, description: "Affordable accessory.", image: "/images/accessory_2.jpg" }
];

const App = () => {
  const [category, setCategory] = useState('home');

  const renderProducts = () => {
    let products;
    switch (category) {
      case 'laptops':
        products = laptopProducts;
        break;
      case 'hot-deals':
        products = hotDealsProducts;
        break;
      case 'smartphones':
        products = smartphoneProducts;
        break;
      case 'cameras':
        products = cameraProducts;
        break;
      case 'accessories':
        products = accessoryProducts;
        break;
      default:
        products = allProducts;
        break;
    }

    return (
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1>H-Electro</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('home')}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('hot-deals')}>Hot Deals</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('laptops')}>Laptops</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('smartphones')}>Smartphones</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('cameras')}>Cameras</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('accessories')}>Accessories</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero-section">
          <div className="hero-item" style={{ backgroundColor: 'red' }}>Laptop Collection<br /><a href="#">Shop Now</a></div>
          <div className="hero-item" style={{ backgroundColor: 'blue' }}>Smartphones Collection<br /><a href="#">Shop Now</a></div>
          <div className="hero-item" style={{ backgroundColor: 'green' }}>Tablets Collection<br /><a href="#">Shop Now</a></div>
        </div>
        <section>
          <h2>Product List</h2>
          {renderProducts()}
        </section>
      </main>
    </div>
  );
};

export default App;
