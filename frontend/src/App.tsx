import React from 'react'
import './App.css'
import Navbar from './customer/components/Navbar/Navbar'
import Home from './customer/pages/Home/Home'
import Footer from './customer/components/Footer/Footer'
import Products from './customer/pages/Products/Products'

function App() {

  return (
    <>
      <Navbar />
      <Products />
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
