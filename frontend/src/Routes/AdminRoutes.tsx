import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Pages/Sellers/SellersTable'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SellersTable />} />
    </Routes>
  )
}

export default AdminRoutes