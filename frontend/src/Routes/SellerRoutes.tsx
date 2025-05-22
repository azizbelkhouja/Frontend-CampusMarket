import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'
import Orders from '../seller/pages/Orders/Orders'

const SellerRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
  )
}

export default SellerRoutes