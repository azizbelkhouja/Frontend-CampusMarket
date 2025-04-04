import React from 'react'
import ElectronicsCategoryCard from './ElectronicsCategoryCard'


const ElectronicsCategory = () => {
  return (
    <div className='flex flex-wrap justify-between py-3 lg:px-20 border-b'>
      {[1,1,1,1,1,1,1].map((item) => <ElectronicsCategoryCard/>)}
        
    </div>
  )
}

export default ElectronicsCategory