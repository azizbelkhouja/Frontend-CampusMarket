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
                <img className='w-[100px]' src="https://spesaonline.conad.it/assets/products/conad-acqua-minerale-naturale-6-x-15-l--400100/Parte-anteriore-planogramma.jpeg/renditions/cq5dam.web.1280.1280.jpeg" alt="" />
                <div className='text-sm space-y-1 text-center'>
                <h1 className='font-bold'>Jennifer</h1>
                <p>Acqua naturale</p>
                <p><strong>Size: </strong>Pack Of 6</p>
                </div>
                <div>
                    <Button onClick={() => navigate("/reviews")} className='my-main-button-outlined'>Write Review</Button>
                </div>
            </section>

            <section className='border p-5'>
                <OrderStepper orderStatus="Arriving" />
            </section>

            <div className='border p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2'>
                    <div className='flex gap-5 font-medium'>
                    <p>Marco</p>
                    <Divider flexItem orientation='vertical' />
                    <p>Via s.romano</p>
                    </div>
                    <p>
                        ferrara, bologna, italy 17
                    </p>
                </div>
            </div>
            <div className="border space-y-4">

                <div className='flex justify-between text-sm pt-5 px-5'>
                    <div className='space-y-1'>
                        <p className='font-bold'>Total Price</p>
                        <p>You saved <span className='my-light-blue font-bold text-xs'>25.00€</span> on your order</p>
                    </div>
                    
                    <p className='font-medium'>€78.00</p>
                </div>

                <div className='px-5'>
                    <div className='bg-[#e5f6fa] px-5 py-2 text-xs font-medium flex items-center gap-3'>
                        <Payments />
                        <p>Pay On Delivery</p>
                    </div>
                </div>

                <Divider />

                <div className='px-5 pb-5'>
                <p className='text-xs'>
                    <strong>Sold by : </strong>
                    Jennifer
                </p>
                </div>

                <div className='p-10'>
                <Button
                    disabled={false}
                    color="error"
                    sx={{
                        py: "0.7rem",
                        borderRadius: 0,
                        "&:hover": {
                            backgroundColor: "red",
                            color: "white",
                        },
                    }}
                    variant="outlined"
                    fullWidth
                >
                    {false?"Order Cancelled":"Cancel Order"}
                </Button>
                </div>
            </div>
        </Box>
  )
}

export default OrderDetails