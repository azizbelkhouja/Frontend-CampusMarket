import React from 'react'
import "./ShopByCategory.css"

const ShopByCategoryCard = () => {
  return (
    <div className='custom-border flex gap-3 flex-col justify-center items-center group cursor-pointer'>
        
        <div className='w-[150px] h-[150px] rounded-full lg:w-[249px] lg:h[249px]'>
            
            <img className='group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
                    src="https://www.dcutec.com/2891-large_default/smartwatch-jewel-black.jpg" alt="Smartwatches" />

        </div>

        <h1>Smartwatches</h1>

    </div>
  )
}

export default ShopByCategoryCard