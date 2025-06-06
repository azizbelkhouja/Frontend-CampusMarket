import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Pages/Sellers/SellersTable'
import CreateCouponForm from '../admin/Pages/Coupon/CreateCouponForm'
import Coupon from '../admin/Pages/Coupon/Coupon'
import GridTable from '../admin/Pages/HomePage/GridTable'
import ElectronicsTable from '../admin/Pages/HomePage/ElectronicsTable'
import ShopByCategoryTable from '../admin/Pages/HomePage/ShopByCategoryTable'
import Deal from '../admin/Pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<SellersTable />} />
      <Route path='coupon' element={<Coupon />} />
      <Route path='add-coupon' element={<CreateCouponForm />} />
      <Route path='home-grid' element={<GridTable />} />
      <Route path='electronics-category' element={<ElectronicsTable />} />
      <Route path='shop-by-category' element={<ShopByCategoryTable />} />
      <Route path='deals' element={<Deal />} />
    </Routes>
  )
}

export default AdminRoutes