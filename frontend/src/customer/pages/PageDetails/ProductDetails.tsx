import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import { Button } from '@mui/material';
import SimilarProduct from './SimilarProduct';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const {productId} = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const handleActiveImage = (value:number) => () => {
    setActiveImage(value)
  }
  
  return (
    <div className='px-5 lg:px-20 pt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {[1,1,1,1].map((item) => <img className='lg:w-full w-[50px] cursor-pointer rounded-md' src="https://www.clcbike.com/156432-large_default/bici-elettrica-full-suspension-conway-xyron-s-29-bosch-smart-2024.jpg" alt=''/>)}
          </div>
          <div className="w-full lg:w-[85%]">
            <img className='w-full rounded-md' src="https://www.clcbike.com/156430-large_default/bici-elettrica-full-suspension-conway-xyron-s-29-bosch-smart-2024.jpg" alt="" />
          </div>
        </section>
        <section className="">
          <h1 className='font-bold text-lg text-primaryblue'>Stefano</h1>
          <p className='text-darkblue font-semibold'>Bici Elettrica</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{color:"#00B1D3", fontSize:"17px"}}/>
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>
              <span className='font-sans text-gray-800'>2897€</span>
              <span className='font-sans line-through text-gray-400'>4000€</span>
              <span className='text-primaryblue font-semibold'>25% OFF</span>
            </div>
            <p className='text-sm text-personalgrey'>IVA included</p>
          </div>
          <div className='mt-7 space-y-3'>
            <div className="flex items-center gap-4">
              <Shield sx={{color:"#00B1D3"}}/>
              <p>Verified by CampusMarket for Quality & Authenticity</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{color:"#00B1D3"}}/>
              <p>100% Buyer Protection - Your Money Back if Unsatisfied</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{color:"#00B1D3"}}/>
              <p>Convenient On-Campus Pickup or Free Local Delivery</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{color:"#00B1D3"}}/>
              <p>Flexible Payment Options - Cash, Card, or Digital Wallets</p>
            </div>
          </div>

          <div className='mt-7 space-y-2'>
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px]">
              <Button disabled={quantity == 1} onClick={() => setQuantity(quantity-1)}>
                <Remove/>
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity+1)} sx={{color:"#00B1D3"}}>
                <Add/>
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              startIcon={<AddShoppingCart/>}
              className='my-main-button'
            >
              Add To Cart
            </Button>
            <Button
              fullWidth
              startIcon={<FavoriteBorder/>}
              className='my-main-button-outlined'
            >
              WishList
            </Button>
          </div>
          <div className="mt-5">
            <p>The Stefano Electric Bike is a high-performance, full-suspension e-bike designed for both urban commuting and off-road adventures. Equipped with a powerful Bosch Smart motor, it ensures a smooth and efficient ride. Its premium build quality, advanced features, and stylish design make it a perfect choice for eco-conscious riders seeking reliability and comfort.</p>
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