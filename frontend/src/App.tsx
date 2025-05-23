import React from 'react'
import './App.css'
import Navbar from './customer/components/Navbar/Navbar'
import Home from './customer/pages/Home/Home'
import Footer from './customer/components/Footer/Footer'
import Products from './customer/pages/Products/Products'
import ProductDetails from './customer/pages/PageDetails/ProductDetails'
import Cart from './customer/pages/Cart/Cart'
import Checkout from './customer/pages/Checkout/Checkout'
import Account from './customer/pages/Account/Account'
import { Route, Routes } from 'react-router-dom'
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller'
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard'
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/seller/*" element={<SellerDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
