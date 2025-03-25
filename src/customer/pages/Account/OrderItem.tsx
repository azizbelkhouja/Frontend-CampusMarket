import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div className="">
          <Avatar sizes='small' sx={{bgcolor: 'black'}}>
            <ElectricBolt/>
          </Avatar>
        </div>
        <div className="">
          <h1 className="font-bold">PENDING</h1>
          <p className="">Arriving By Thu, 9 Jan</p>
        </div>
      </div>

      <div className="p-5 flex bg-gray-100 gap-3 rounded-md">
        <div className="">
          <img className='w-[70px]' src="https://afremov.com/media/catalog/product/cache/029c9410eb6b6a309d2f6c6bdfc6e2f2/i/p/iphone-14-pro-max-case-on-phone-66256adedef51_al3hfb0va7sv8n3n.jpg" alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className='font-bold'>Michele Iphones</h1>
          <p className="">Michele Iphones is a renowned seller known for offering the latest and most sought-after iPhone models.</p>
          <p className="">
            <strong>Size: </strong>
            STANDARD
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem