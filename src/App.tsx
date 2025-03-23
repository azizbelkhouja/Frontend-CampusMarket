import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
