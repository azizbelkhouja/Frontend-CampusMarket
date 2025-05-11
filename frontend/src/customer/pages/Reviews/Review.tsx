import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='lg:p-25 flex flex-col lg:flex-row gap-20'>
      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
        <img src="https://www.clcbike.com/156431-large_default/bici-elettrica-full-suspension-conway-xyron-s-29-bosch-smart-2024.jpg" alt="" />
        <div>
          <div>
            <p className='font-bold text-xl'>Stefano</p>
            <p className='text-lg text-gray-600'>Bici Elettrica</p>
          </div>
          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl'>
              <span className='font-sans text-gray-800'>1399€</span>
              <span className='font-sans line-through text-gray-400'>1799€</span>
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