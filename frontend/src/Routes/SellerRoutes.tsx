import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'
import Orders from '../seller/pages/Orders/Orders'
import Products from '../seller/pages/Products/Products'
import Transaction from '../seller/pages/Payment/Transaction'
import Payment from '../seller/pages/Payment/Payment'
import AddProduct from '../seller/pages/Products/AddProduct'
import Profile from '../seller/pages/Account/Profile'
import SellerAccountVerified from '../seller/pages/SellerAccountVerified'

const SellerRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products' element={<Products />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/account' element={<Profile />} />
        <Route path='/verify-seller' element={<SellerAccountVerified />} />
      </Routes>
  )
}

export default SellerRoutes