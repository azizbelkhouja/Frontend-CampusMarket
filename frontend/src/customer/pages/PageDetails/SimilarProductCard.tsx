import React from 'react'
import { useNavigate } from 'react-router-dom';

const SimilarProductCard = ({ product }: any) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/product-details/${product.category?.categoryId}/${product.title}/${product.id}`)} className='group px-2 relative'>
      <div className=''>
        <img className='object-cover object-top h-full w-full' src="https://m.media-amazon.com/images/I/71T6TGVtutL.jpg" alt="" />
      </div>

      <div className='details pt-3 space-y-1 group-hover-effect rounded-md '>
        <div className='name'>
          <h1>{product.seller?.businessDetails.businessName}</h1>
          <p>{product.title}</p>
        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>{product.sellingPrice}€</span>
          <span className='font-sans thin-line-through text-gray-400'>{product.mrpPrice}€</span>
          <span className='text-primaryblue font-semibold text-red-400'>-{product.discountPercent}%</span>
        </div>
      </div>
    </div>
  )
}

export default SimilarProductCard