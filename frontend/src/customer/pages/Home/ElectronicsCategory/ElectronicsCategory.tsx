import React from 'react'
import ElectronicsCategoryCard from './ElectronicsCategoryCard'

const ElectronicsCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {[1,1,1,1,1,1,1].map((item) => (
          <ElectronicsCategoryCard item={item}/>
        ))}
    </div>
  );
}

export default ElectronicsCategory