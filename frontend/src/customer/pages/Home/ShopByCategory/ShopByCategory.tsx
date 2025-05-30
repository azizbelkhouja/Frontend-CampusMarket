import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'
import { useAppSelector } from '../../../../State/Store';

const ShopByCategory = () => {

  const { homePage} = useAppSelector((store) => store);

  return (
    <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
      {homePage.homePageData?.shopByCategories?.map((item) => <ShopByCategoryCard item={item} />)}
    </div>
  )
}

export default ShopByCategory