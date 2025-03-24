import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import { Button } from '@mui/material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className='px-5 lg:px-20 pt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {[1,1,1,1].map((item) => <img className='lg:w-full w-[50px] cursor-pointer rounded-md' src='https://i.pinimg.com/736x/ad/94/0f/ad940fae4bbaf8eb5a14bf628cf27954.jpg' alt=''/>)}
          </div>
          <div className="w-full lg:w-[85%]">
            <img className='w-full rounded-md' src="https://i.pinimg.com/736x/88/58/ef/8858ef0321857ab0491379687cf2dc52.jpg" alt="" />
          </div>
        </section>
        <section className="">
          <h1 className='font-bold text-lg text-primaryblue'>Iphone</h1>
          <p className='text-darkblue font-semibold'>Iphone 16 pro max</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{color:"lightblue", fontSize:"17px"}}/>
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>
              <span className='font-sans text-gray-800'>1,399€</span>
              <span className='font-sans line-through text-gray-400'>1,799€</span>
              <span className='text-primaryblue font-semibold'>25% OFF</span>
            </div>
            <p className='text-sm text-personalgrey'>IVA included</p>
          </div>
          <div className='mt-7 space-y-3'>
            <div className="flex items-center gap-4">
              <Shield sx={{color:"lightblue"}}/>
              <p>Verified by FlipNest for Quality & Authenticity</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{color:"lightblue"}}/>
              <p>100% Buyer Protection - Your Money Back if Unsatisfied</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{color:"lightblue"}}/>
              <p>Convenient On-Campus Pickup or Free Local Delivery</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{color:"lightblue"}}/>
              <p>Flexible Payment Options - Cash, Card, or Digital Wallets</p>
            </div>
          </div>

          <div className='mt-7 space-y-2'>
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px]">
              <Button disabled={quantity==1} onClick={() => setQuantity(quantity-1)}>
                <Remove/>
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity+1)}>
                <Add/>
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart/>}
              sx={{py:"1rem"}}
            >
              Add To Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder/>}
              sx={{py:"1rem"}}
            >
              WishList
            </Button>
          </div>
          <div className="mt-5">
            <p>Experience the pinnacle of innovation with the iPhone 16 Pro Max. Featuring a stunning 6.9-inch Super Retina XDR display, a powerful A18 Bionic chip for lightning-fast performance, and an advanced triple-camera system for breathtaking photos and videos.</p>
          </div>

          <div className='mt-7 space-y-4'>
            <ReviewCard />
            <Divider />
          </div>

        </section>
      </div>

      <div className='mt-20'>
        <h1 className='text-lg font-bold'>Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>

    </div>
  )
}

export default ProductDetails