import React from 'react'
import OrderItemCard from './OrderItemCard'

const Orders = () => {

  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>Your Orders</h1>
        <p>All Orders</p>
      </div>
      <div className='space-y-2'>
      {[1,1,1,1,1].map(() => <OrderItemCard />)}
      </div>
    </div>
  )
}

export default Orders