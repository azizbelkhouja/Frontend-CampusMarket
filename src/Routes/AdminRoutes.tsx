import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/pages/Sellers/SellersTable'
import Coupon from '../admin/pages/Coupon/Coupon'
import AddNewCouponForm from '../admin/pages/Coupon/AddNewCouponForm'
import GridTable from '../admin/pages/HomePage/GridTable'
import ElectronicsTable from '../admin/pages/HomePage/ElectronicsTable'
import ShopByCategoryTable from '../admin/pages/HomePage/ShopByCategoryTable'
import Deal from '../admin/pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<SellersTable/>}/>
    <Route path='/coupon' element={<Coupon/>}/>
    <Route path='/add-coupon' element={<AddNewCouponForm/>}/>
    <Route path='/home-grid' element={<GridTable/>}/>
    <Route path='/electronics-category' element={<ElectronicsTable/>}/>
    <Route path='/shop-by-category' element={<ShopByCategoryTable/>}/>
    <Route path='/deals' element={<Deal/>}/>
  </Routes>
  )
}

export default AdminRoutes