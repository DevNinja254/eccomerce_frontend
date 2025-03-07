import React from 'react'
import { NavLink } from 'react-router-dom'
const Discount = () => {
    const best = [1, 2,]
  return (
    <div>
      {
        best.map((dec, index) => {
            return <div key={index} className='bgWhitish grid grid-cols-2 mx-3 rounded-lg  overflow-hidden shadow-sm shadow-gray-300'>
                <div className='p-4 py-6'>
                    <p className='text-sm whitespace-nowrap fontNewTimes textGreen font-bold uppercase'>WEEKEND DISCOUNT 40%</p>
                    <p className='mt-2 text-lg font-bold text-opacity-90 text-gray-900 uppercase'>ELECTRIC KETTLE</p>
                    <p className='capitalize text-sm text-gray-600'>Best of the best</p>
                    <NavLink className="my-2 bg-gray-400 px-2 inline-block py-2 rounded-full text-gray-100" to={`/products/electric${index}`}>Shop Now</NavLink>
                </div>
                <figure className='relative'>
                    <img className='h-full w-full discImg'  src={require("../../assets/images/kettle.jpg")} alt="" />
                   
                </figure>
            </div>
        })
      }
    </div>
  )
}

export default Discount
