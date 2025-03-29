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
import Account from './customer/pages/Account/Account';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/pages/Dashboard/AdminDashboard';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
        <Route path="/review/:productId" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/become-seller" element={<BecomeSeller/>} />
        <Route path="/seller/*" element={<SellerDashboard/>} />
        <Route path="/admin/*" element={<AdminDashboard/>} />


      </Routes>
    </div>
  );
}

export default App;
