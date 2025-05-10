import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';

const ProductCard = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "https://worldissmall.fr/wp-content/uploads/2024/12/Concept-iPhone-18-ultra-airpods-1024x790.webp",
    "https://www.yankodesign.com/images/design_news/2025/03/auto-draft/iphone_18_concept_2.jpg"
  ]

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
  }, [images.length, isHovered])

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
                <Button variant='contained' sx={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>
                  <Favorite/>
                </Button>
                <Button variant='contained' sx={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>
                  <ModeComment/>
                </Button>
              </div>
            </div>
          }
        </div>

        <div className='details pt-3 space-y-1 group-hover-effect'>
          <div className='name'>
            <h1>Aziz Store</h1>
            <p>Iphone 18</p>
          </div>
          <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>2025€</span>
            <span className='font-sans thin-line-through text-gray-400'>2000€</span>
            <span className='text-red-500 font-semibold'>-12%</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default ProductCard