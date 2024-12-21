import React from 'react'
import { lifeImages } from './constants'

const Life = () => {
  return (
<div className="container mx-auto px-4 py-8">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-8">Life @ Skaktech</h1>
      
      <div className="grid grid-cols-6 grid-rows-1 gap-4">
        {/* First Column - Stacked Images */}
        <div className="col-span-2 grid grid-rows-2 gap-4">
          <div className="overflow-hidden  hover:shadow-xl transition-shadow duration-300">
            <img
              src={`/assets/images/${lifeImages[0].src}.png`}
              alt={lifeImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden  hover:shadow-xl transition-shadow duration-300">
            <img
              src={`/assets/images/${lifeImages[1].src}.png`}
              alt={lifeImages[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Horizontal Images */}
        <div className="col-span-1 overflow-hidden  hover:shadow-xl transition-shadow duration-300">
          <img
            src={`/assets/images/${lifeImages[2].src}.png`}
            alt={lifeImages[2].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 overflow-hidden  hover:shadow-xl transition-shadow duration-300">
          <img
            src={`/assets/images/${lifeImages[3].src}.png`}
            alt={lifeImages[3].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 overflow-hidden  hover:shadow-xl transition-shadow duration-300">
          <img
            src={`/assets/images/${lifeImages[4].src}.png`}
            alt={lifeImages[4].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

  )
}

export default Life