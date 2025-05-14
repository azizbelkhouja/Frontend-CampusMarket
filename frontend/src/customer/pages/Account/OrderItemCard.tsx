import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const OrderItemCard = () => {

  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar sizes='small' sx={{bgcolor: '#00B1D3'}}>
            <ElectricBolt/>
          </Avatar>
        </div>
        <div className="">
          <h1 className="font-bold">Pending</h1>
          <p className="">Arriving By Tomorrow</p>
        </div>
      </div>

      <div className="p-5 flex bg-[#e5f6fa] gap-3 rounded-md">
        <div className="">
          <img className='w-[70px]' src="https://def-live.cdn.aboutyou.cloud/images/30f908a898fe46bdc6a897606b8f0f3e.jpg?quality=75&height=832&width=596" alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className='font-bold'>Azizos</h1>
          <p className="">sneakers</p>
          <p className=""><strong>Size: </strong> 45</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItemCard