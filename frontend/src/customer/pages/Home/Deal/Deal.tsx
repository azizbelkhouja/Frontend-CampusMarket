import React from 'react'
import DealCard from './DealCard';

const DealSlider = () => {

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between gap-2">
        {[1,1,1,1,1,1].map(() => ( <DealCard /> ))}
      </div>
    </div>
  )
}

export default DealSlider