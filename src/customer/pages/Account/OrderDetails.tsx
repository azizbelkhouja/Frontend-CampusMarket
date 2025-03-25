import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderStepper } from './OrderStepper';
import { Payments } from '@mui/icons-material';

const OrderDetails = () => {
    const navigate = useNavigate();

    return (
        <Box className='space-y-5'>

            <section className='flex flex-col gap-5 justify-center items-center'>
                <img 
                className='w-[100px]' 
                src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727452042/pro-ray-android-ios-cellecor-yes-original-imagydnsrany7qhy_1_m9n9t5.webp" 
                alt="" 
                />
                <div className='text-sm space-y-1 text-center'>
                <h1 className='font-bold'>{"Michele Iphones"}</h1>
                <p>
                    Michele Iphones is a renowned seller known for offering the latest and most sought-after iPhone models.
                </p>
                <p><strong>Size:</strong>STANDARD</p>
                </div>
                <div>
                <Button onClick={() => navigate(`/reviews/${5}/create`)}>Write Review</Button>
                </div>
            </section>

            <section className='border p-5'>
                <OrderStepper orderStatus={"SHIPPED"}/>
            </section>

            <div className='border p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2'>
                    <div className='flex gap-5 font-medium'>
                    <p>{"Aziz"}</p>
                    <Divider flexItem orientation='vertical' />
                    <p>{3511111111}</p>
                    </div>
                    <p>
                        Via Sagratt 1, 44444, Rome, Italy
                    </p>
                </div>
            </div>
            <div className="border space-y-4">

                <div className='flex justify-between text-sm pt-5 px-5'>
                    <div className='space-y-1'>
                        <p className='font-bold'>Total Price</p>
                        <p>You saved <span className='text-green-500 font-medium text-xs'>€{123}.00</span> on your order</p>
                    </div>
                    
                    <p className='font-medium'>₹{412}.00</p>
                </div>

                <div className='px-5'>
                    <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                        <Payments />
                        <p>Pay On Delivery</p>
                    </div>
                </div>

                <Divider />

                <div className='px-5 pb-5'>
                <p className='text-xs'>
                    <strong>Sold by : </strong>
                    {"Michele Iphones"}
                </p>
                </div>

                <div className='p-10'>
                    <Button
                        disabled={false}
                        // onClick={handleCancelOrder}
                        color='error'
                        sx={{ py: "0.7rem" }}
                        className=''
                        variant='outlined'
                        fullWidth
                    >
                        {false ? "Order Canceled" : "Cancel Order"}
                    </Button>
                </div>

            </div>  
        </Box>
  )
}

export default OrderDetails