import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="pt-[10rem] pb-[3rem] flex flex-col gap-6 items-center justify-center  px-6 sm:px-12 text-center">
      
      {/* Tagline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
        Explore Companies Like Never Before
      </h1>
      
      
      <p className="text-gray-700 max-w-xl text-sm sm:text-base">
        Browse a curated directory of companies, filter by industry and location, and uncover insights effortlessly.
      </p>

      {/* CTA  */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a href='#explore' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition">
          Explore Companies
        </a>
        <a href='#explore' className="bg-white border border-blue-500 hover:bg-blue-50 text-blue-500 px-6 py-3 rounded-full font-semibold transition">
          Get Started
        </a>
      </div>

    </div>
  )
}

export default Hero
