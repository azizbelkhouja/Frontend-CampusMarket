import React from 'react'
import './App.css'
import Navbar from './customer/components/Navbar/Navbar'
import Home from './customer/pages/Home/Home'
import Footer from './customer/components/Footer/Footer'
import Products from './customer/pages/Products/Products'
import ProductDetails from './customer/pages/PageDetails/ProductDetails'
import Reviews from './customer/pages/Reviews/Review'
import Cart from './customer/pages/Cart/Cart'

function App() {

  return (
    <>
      <Navbar />
      {/* <Products /> */}
      {/* <Home /> */}
      {/* <ProductDetails /> */}
      {/* <Reviews /> */}
      <Cart />
      <Footer />
    </>
  )
}

export default App
