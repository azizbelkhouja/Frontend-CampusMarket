import React from 'react'
import "./ShopByCategory.css"

const ShopByCategoryCard = () => {

  return (
    <div className='custom-border flex gap-3 flex-col justify-center items-center group cursor-pointer'>
      <div className='w-[120px] h-[250px] rounded-full lg:w-[220px] lg:h[400px]'>
        <img className='object-cover object-top h-full w-full' src="https://m.media-amazon.com/images/I/71F5H-S4OyL._AC_UF1000,1000_QL80_.jpg" alt="Book" />
      </div>
      <h1>Typescript Books</h1>
    </div>
  )
}

export default ShopByCategoryCard