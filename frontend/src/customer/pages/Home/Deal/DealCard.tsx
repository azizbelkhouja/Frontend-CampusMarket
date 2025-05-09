import React from 'react'

const DealCard = () => {

  return (
    <div className='w-[12rem] cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] w-full h-[12rem] object-cover object-top border-black  p-2' src="https://cdn.sandberg.world/products/images/lg/640-97_lg.jpg" alt="office chair" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
          <p className='text-lg font-semibold'>Best Chair in Italy</p>
          <p className='text-2xl font-bold'>29% OFF</p>
          <p className='text-balance text-lg bg-white text-black mt-2 font-medium'>Shop Now</p>
        </div>
    </div>
  )
}

export default DealCard