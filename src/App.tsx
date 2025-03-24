import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Product />} /> */}
        {/* <Route path="/" element={<ProductDetails />} /> */}
        {/* <Route path="/" element={<Review />} /> */}
        {/* <Route path="/" element={<Cart />} /> */}
        <Route path="/" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
