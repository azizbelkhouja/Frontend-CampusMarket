import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[12rem] cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] w-full h-[12rem] object-cover object-top border-black' src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000" alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>AirTag</p>
            <p className='text-2xl font-bold'>22% OFF</p>
            <p className='text-balance text-lg bg-white text-black mt-2 font-medium'>Shop Now</p>
        </div>
    </div>
  )
}

export default DealCard