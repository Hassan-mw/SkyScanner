import React from 'react'

const FlightDetails = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#eff3f8] pb-8'>
    <div className='w-full max-w-screen-xl flex flex-col space-y-5 items-start p-3 '>
    
    <p className='text-xs text-slate-600'>Flight prices are per traveller, and our lowest estimates are based on the most recent fares. Hotel prices are calculated based on the cheapest nightly rate of a 4-star hotel for your selected dates.</p>
   
    <p className='text-xs text-gray-600'>Prices shown are the lowest estimated fares for one Economy class passenger, based on searches made on Skyscanner over the past four days. Prices and availability can change at any time. We use AI-powered filters to help you find your perfect trip. We'll do our best to make sure that what we show is accurate, but not all results are reviewed.</p>
    </div>
    </div>
  )
}

export default FlightDetails