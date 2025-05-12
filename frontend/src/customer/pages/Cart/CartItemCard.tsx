import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItemCard = () => {

  const handleUpdateQuantity=()=>{
      
  }

  return (
    <div className='border rounded-md relative'>
      
      <div className="p-5 flex gap-3">

        <div>
          <img className='w-[90px] rounded-md' src="https://i5.walmartimages.com/asr/0f4d1c4e-5b59-4652-8546-b10a7dddb6eb.2fd94d1f362b4090fa72ef53127c5392.jpeg" alt="" />
        </div>

        <div className='space-y-2'>
        <h1 className="font-semibold text-lg">Sara's kitchen</h1>
        <p className='text-gray-600 font-medium text-sm'>
          Good containers
        </p>
        <p className='text-xs text-gray-400'><strong>Sold By: </strong>Sara</p>
        <p className='text-sm'>3 days return available</p>
        <p className='text-sm text-gray-500'><strong>Quantity: </strong>3</p>
        </div>
      </div>

      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">

          <div className='flex items-center gap-2 w-[140px] justify-between'>

            <Button onClick={handleUpdateQuantity} disabled={true}>
                <Remove/>
              </Button>
              <span>
                {5}
              </span>
              <Button onClick={handleUpdateQuantity}>
                <Add sx={{color: 'black'}}/>
              </Button>
          </div>
        </div>

        <div className="pr-5">
        <p className='font-medium text-gray-700 '>8.99€</p>
        </div>

      </div>

      <div className='absolute top-1 right-1'>
        <IconButton>
          <Close/>
        </IconButton>
      </div>

    </div>
  )
}

export default CartItemCard