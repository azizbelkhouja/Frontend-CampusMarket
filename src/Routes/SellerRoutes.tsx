import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../seller/pages/Products/Products'
import Orders from '../seller/pages/Orders/Orders'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import { Dashboard } from '@mui/icons-material'
import AddProduct from '../seller/pages/Products/AddProduct'
import Transaction from '../seller/pages/Payment/Transaction'

const SellerRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/account' element={<Profile />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
  )
}

export default SellerRoutes