import React, { useEffect } from 'react'
import OrderItemCard from './OrderItemCard'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchUserOrderHistory } from '../../../State/customer/OrderSlice';

const Orders = () => {

  const dispatch = useAppDispatch();
  const { auth, orders } = useAppSelector(store => store);

  useEffect(() => {
      dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
  }, [auth.jwt, dispatch])

  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>Your Orders</h1>
        <p>All Orders</p>
      </div>
      <div className='space-y-2'>
      {orders?.orders?.map((order)=>order?.orderItems.map((item)=><OrderItemCard item={item} order={order}/>))}
      </div>
    </div>
  )
}

export default Orders