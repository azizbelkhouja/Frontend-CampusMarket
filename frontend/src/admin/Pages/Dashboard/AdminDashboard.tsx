import React, { useEffect, useState } from 'react'
import AdminDrawerList from '../../components/AdminDrawerList'
import Navbar from './Navbar'
import AdminRoutes from '../../../Routes/AdminRoutes';

const AdminDashboard = () => {
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }
  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="lg:flex lg:h-[90vh] py-25">
        {/* <Navbar DrawerList={AdminDrawerList} /> */}
        <section className="lg:flex lg:h-[90vh]">
          <div className="hidden lg:block h-full">
            <AdminDrawerList />
          </div>
          <div className="p-10 w-full lg:w-[80%]  overflow-y-auto">
          <AdminRoutes />
        </div>
        </section>
      </div>
    </>
  )
}

export default AdminDashboard