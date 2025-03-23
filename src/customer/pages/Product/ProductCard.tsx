import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { grey, teal } from '@mui/material/colors';

const images = [
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0X6vsKIE0WfiAp4Hsmc6iIF0YpN-R2WPLA&s"
]

const ProductCard = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    let interval:any;

    if(isHovered) {
        interval = setInterval(() => {
          setCurrentImage((prevImage)=>(prevImage + 1) % images.length);
        }, 900);
    }
    else if(interval) {
        clearInterval(interval);
        interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered])
  

  return (
    <>
      <div className='group px-4 relative'>

        <div className='card' 
          onMouseEnter = {() => setIsHovered(true)}
          onMouseLeave = {() => setIsHovered(false)}
        >
          
          {images.map((item, index) => <img className='card-media object-top' src={item} alt="" 
          style={{transform: `translateX(${(index-currentImage)*100}%)`}}/>)}

          { isHovered &&
            <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-3'>

                <Button variant='contained' color='inherit'>
                  <Favorite/>
                </Button>

                <Button variant='contained' color='inherit'>
                  <ModeComment/>
                </Button>

              </div>
            </div>
          }

        </div>

        <div className='details pt-3 space-y-1 group-hover-effect rounded-md '>
          <div className='name'>
            <h1>Iphone 16</h1>
            <p>Iphone 16 pro max 256go</p>
          </div>
          <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>1,399€</span>
            <span className='font-sans thin-line-through text-gray-400'>1,799€</span>
            <span className='text-red-500 font-semibold'>-25%</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductCard