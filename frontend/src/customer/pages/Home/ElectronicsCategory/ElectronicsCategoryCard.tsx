import React from 'react'

const ElectronicsCategoryCard = () => {

  return (
    <div className='flex items-center justify-center flex-col gap-2 border-[#213D72] border cursor-pointer p-3 hover:shadow-md transition-all duration-300 ease-in-out'>
      <img className='object-contain h-10' src="https://www.backmarket.it/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/e81730a8-d82b-47c4-9575-081b06a0060d-1_a3bd6599-2d03-477c-9920-5ac16c1dfac4.jpg" alt="Thinkpad" />
      <h2 className='font-semibold text-sm my-dark-blue'>Laptops</h2>
    </div>
  )
}

export default ElectronicsCategoryCard