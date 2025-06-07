import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-[10vh] flex items-center px-5 border-b'>
      <div className='flex items-center gap-3 '>
        <h1 className='logo text-xl cursor-pointer'>Welcome To The Admin Dashboard, Aziz Belkhouja</h1>
      </div>
    </div>
  )
}

export default Navbar