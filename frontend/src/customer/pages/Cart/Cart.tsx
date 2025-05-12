import React, { useEffect, useState } from 'react'
import { Close, Favorite, LocalOffer } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material';
import PricingCard from './PricingCard';
import { useNavigate } from 'react-router-dom';
import CartItemCard from './CartItemCard';

const Cart = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  const handleApllyCoupon = (apply: string) => {
    console.log(couponCode,apply)
  }

  return (
    <>
      {true ? (
        <div className="pt-30 px-5 sm:px-10 md:px-60 lg:px-60 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div className="lg:col-span-2 space-y-3 ">
              {[1,1,1,1,1,1,].map((item) => (
                <CartItemCard />
              ))}
            </div>

            <div className="col-span-1  text-sm space-y-3">
              <div className="border rounded-md px-5 py-3 space-y-5">
                <div className="">
                  <div className="flex gap-3 text-sm items-center">
                    <LocalOffer
                      sx={{ color: "black", fontSize: "17px" }}
                    />
                    <span>Apply Coupons</span>
                  </div>
                </div>
                {couponCode ? (
                  <div className="flex justify-between items-center">
                    <TextField
                      value={couponCode}
                      onChange={handleChange}
                      placeholder="coupon code"
                      className=""
                      size="small"
                    />
                    <Button
                      onClick={() => handleApllyCoupon("true")}
                      disabled={couponCode ? false : true}
                      size="small"
                    >
                      Apply
                    </Button>
                  </div>
                ) : (
                  <div className="flex">
                    <div className="pl-5 pr-3 border rounded-full flex gap-2 items-center">
                      <span className="">Code Applied</span>
                      <IconButton
                        onClick={() => handleApllyCoupon("false")}
                        size="small"
                      >
                        <Close className="text-red-600" />
                      </IconButton>
                    </div>
                  </div>
                )}
              </div>

              <section className="border rounded-md">
                <PricingCard />
                <div className="p-5">
                  <Button
                    className='my-main-button-outlined'
                    variant="contained"
                    fullWidth
                  >
                    BUY NOW
                  </Button>
                </div>
              </section>

              <div className="border rounded-md px-5 py-4 flex justify-between items-center cursor-pointer">
                <span>Add From Whishlist</span>
                <Favorite sx={{ color: "black", fontSize: "21px" }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[85vh] flex justify-center items-center flex-col">
          <div className="text-center py-5">
            <h1 className="text-lg font-medium">hay its feels so light!</h1>
            <p className="text-gray-500 text-sm">
              there is nothing in your bag, lets add some items
            </p>
          </div>
          <Button variant="outlined" sx={{ py: "11px" }}>
            Add From Wishlist
          </Button>
        </div>
      )}
    </>
  );
};

export default Cart