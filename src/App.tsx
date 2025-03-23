import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './customer/pages/Product/Product';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
