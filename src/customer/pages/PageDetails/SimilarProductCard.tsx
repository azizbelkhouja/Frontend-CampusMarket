import React from 'react'

const SimilarProductCard = () => {
  return (
    <div>
        <div className='group px-4 relative'>

<div className='card'>
  
  <img className='card-media object-top' src="https://i.pinimg.com/736x/c5/93/42/c59342d1ebd79d415ad1ae9c54e94c22.jpg" alt="" />


</div>

<div className='details pt-3 space-y-1 group-hover-effect rounded-md '>
  <div className='name'>
    <h1>Iphone 16</h1>
    <p>Iphone 16 pro max 256go</p>
  </div>
  <div className='price flex items-center gap-3'>
    <span className='font-sans text-gray-800'>1,399€</span>
    <span className='font-sans thin-line-through text-gray-400'>1,799€</span>
    <span className='text-primaryblue font-semibold'>25%</span>
  </div>

</div>

</div>
    </div>
  )
}

export default SimilarProductCard