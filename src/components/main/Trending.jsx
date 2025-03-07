import React from 'react'
import { NavLink } from 'react-router-dom'

const Trending = () => {
    const trends = [1,1,1,1]
  return (
    <div className='m-3'>
      <h4 className='py-3 fontNewTimes font-bold text-lg tracking-wide text-gray-900'>Trending search</h4>
      <div className='borderGray p-5 rounded-md overflow-hidden'>
        {trends.map((trend, index) => {
            return (
                <NavLink to={`/products/trends`} key={index} className='grid grid-cols-4 gap-4 mt-3 mb-5 items-center'>
                  <figure className='p-1'>

                    <img className='inline-block object-cover w-full h-full' src={require('../../assets/images/kettle.jpg')} alt="" />
                  </figure>
                  <div className='col-span-3 flex flex-col items-start justify-between gap-3'>
                      <p className='font-sans font-bold text-gray-800'>Electric Kettle</p>
                      <p className='textRed font-bold fontNewTimes tracking-tight'>Ksh. 2030</p>
                  </div>
                </NavLink>
            )
        })}
      </div>
    </div>
  )
}

export default Trending
