import React from 'react'
import { NavLink } from 'react-router-dom'

const Onmarket = () => {
  return (
    <div to="#" className='mx-3 my-4 rounded-lg overflow-hidden block relative'>
        <figure>
            <img className='arrivedImg' src={require("../../assets/images/kettle.jpg")} alt="" />
        </figure>
        <div className='absolute top-4 left-5 arrived' >
            <p className='text-sm text-gray-600 capitalize py-2 font-bold'>Just Arrived</p>
            <p className='uppercase text-lg text-gray-950 text-opacity-80'>ELECTRIC KETTLE</p>
            <p className='font-bold capitalize py-2'>With warrant</p>
            <p className='text-gray-950 pt-2'>only-from</p>
            <p className='text-lg pb-3 textRed font-bold'>Ksh. 230</p>
            <NavLink className="inline-block bgSky text-gray-100 text-sm p-1 rounded-full" to="/products/on market">Shop Now</NavLink>
        </div>
    </div>
  )
}
export default Onmarket
