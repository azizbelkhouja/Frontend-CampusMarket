import React from 'react'
import DealCard from './DealCard';
import { useAppSelector } from '../../../../State/Store';

const DealSlider = () => {

  const {homePage} = useAppSelector(store => store);

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between gap-2">
        {homePage.homePageData?.deals?.map((item:Deal) => 
          <div className="border flex flex-col items-center justify-center">
            <DealCard deal = {item}/>
          </div>)}
      </div>
    </div>
  )
}

export default DealSlider