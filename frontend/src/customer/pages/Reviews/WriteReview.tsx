import React, { useEffect } from 'react'
import ReviewForm from './ReviewForm';

const WriteReviews = () => {

    return (
        <div className='p-5 lg:p-20 flex flex-col lg:flex-row gap-10'>
            <div className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aL5_3_DtnJMn8rZqdd6gxIy_SG9C-gg6vw&s" alt="" />
                <div>
                    <div>
                        <p className='font-bold text-xl'>Alice</p>
                        <p className='text-lg text-gray-600'>OLd clothes</p>
                    </div>
                    <div className='price flex items-center gap-3 mt-5 text-lg'>
                        <span className='font-semibold text-gray-800' >100€</span>
                        <span className='text thin-line-through text-gray-400 '>150€</span>
                        <span className='text-[#00927c] font-semibold'>31% off</span>
                    </div>
                </div>
            </div>
            <section className="w-full md:w-1/2 lg:w-[70%]">
                <h1 className="font-semibold text-2xl pb-4 text-gray-700">
                    Write Your Review & Give Ratings
                </h1>
                <ReviewForm />
            </section>
        </div>
    )
}

export default WriteReviews