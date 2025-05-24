import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Pages/Sellers/SellersTable'
import CreateCouponForm from '../admin/Pages/Coupon/CreateCouponForm'
import Coupon from '../admin/Pages/Coupon/Coupon'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SellersTable />} />
      <Route path='/coupon' element={<Coupon/>}/>
      <Route path='/add-coupon' element={<CreateCouponForm/>}/>
    </Routes>
  )
}

export default AdminRoutes