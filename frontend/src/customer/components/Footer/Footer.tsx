import React from 'react'

const Footer = () => {
  return (
  
      <footer className="mt-20 p-20 bg-[#213D72] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-center md:text-left">
              <h5 className="text-lg font-semibold">CampusMarket</h5>
              <p className="text-sm mt-2">
                © 2025 CampusMarket. All rights reserved.
              </p>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <ul className="flex justify-center space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="https://www.linkedin.com/in/mohamed-aziz-belkhouja/" className="hover:underline">About</a></li>
                <li><a href="https://www.linkedin.com/in/mohamed-aziz-belkhouja/" className="hover:underline">Advertise</a></li>
                <li><a href="https://www.linkedin.com/in/mohamed-aziz-belkhouja/" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
   
  )
}

export default Footer