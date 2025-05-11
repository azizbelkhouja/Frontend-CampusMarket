import React from 'react'

const SimilarProductCard = () => {

  return (
    <div className='group px-2 relative'>
      <div className=''>
        <img className='object-cover object-top h-full w-full' src="https://m.media-amazon.com/images/I/71T6TGVtutL.jpg" alt="" />
      </div>

      <div className='details pt-3 space-y-1 group-hover-effect rounded-md '>
        <div className='name'>
          <h1>Jamel</h1>
          <p>Engwee Bike</p>
        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>1233€</span>
          <span className='font-sans thin-line-through text-gray-400'>3100€</span>
          <span className='text-primaryblue font-semibold text-red-400'>-70%</span>
        </div>
      </div>
    </div>
  )
}

export default SimilarProductCard