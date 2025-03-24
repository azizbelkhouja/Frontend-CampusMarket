import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
        <img src="https://i.pinimg.com/736x/88/58/ef/8858ef0321857ab0491379687cf2dc52.jpg" alt="" />
        <div>
          <div>
            <p className='font-bold text-xl'>Iphone</p>
            <p className='text-lg text-gray-600'>IPhone 16 pro max</p>
          </div>
          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>
              <span className='font-sans text-gray-800'>1,399€</span>
              <span className='font-sans line-through text-gray-400'>1,799€</span>
              <span className='text-primaryblue font-semibold'>25% OFF</span>
            </div>
            <p className='text-sm text-personalgrey'>IVA included</p>
          </div>
        </div>
      </section>

      <section className='space-y-5 w-full'>
        {[1,1,1,1,1,1].map((item) => 
          <div className='space-y-5'>
            <ReviewCard/>
            <Divider/>
          </div> )}
      </section>
    </div>
  )
}

export default Review