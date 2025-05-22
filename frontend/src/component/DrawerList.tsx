import { Divider, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface menuItem {
  name:string,
  path:string,
  icon: any,
  activeIcon: any
}

interface DrawerListProp {
  menu:menuItem[],
  menu2:menuItem[],
  toggleDrawer:()=>void
}

const DrawerList = ({menu, menu2, toggleDrawer}:DrawerListProp) => {

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout =()=>[
    console.log("Logout")
  ]

  return (
    <div className='h-full '>
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-r-[#213D72] py-5">
        <div className="space-y-2">
          {
            menu.map((item, index:number) =>
              <div onClick={() => navigate(item.path)} className='pr-9 cursor-pointer' key={index}>
                <div className={`${item.path==location.pathname?"bg-[#213D72] text-white":"text-[#213D72]"} flex items-center px-5 py-3 rounded-r-full`}>
                  <ListItemIcon>
                    {item.path==location.pathname?item.activeIcon:item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </div>
              </div>
            )
          }
        </div>
        <Divider className='my-5'/>
        <div className="space-y-2">
          {
            menu2.map((item, index:number) =>
              <div onClick={
                () => {
                  if(item.path =="/"){
                    handleLogout()
                  }else{
                    navigate(item.path)
                  }
                }} 
                className='pr-9 cursor-pointer ' key={index}>
                  <div className={`${item.path==location.pathname?"bg-black text-white":"text-black"} flex items-center px-5 py-3 rounded-r-full`}>
                    <ListItemIcon>
                      {item.path==location.pathname?item.activeIcon:item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default DrawerList