import React from 'react'
import { NavLink } from 'react-router-dom'

const Special = () => {
  return (
    <NavLink to="/products/special offer" className="bgYello block relative mx-3 p-4 rounded-md overflow-hidden">
        <figure className='h-4/5 w-1/2 m-auto'>
            <img className='specialImg' src={require("../../assets/images/kettle.jpg")} alt="" />
        </figure>
        <div className='absolute top-0 left-0 p-4 bg-opacity-15 w-full h-full backdrop-brightness-95'>
            <p className='text-white font-bold text-sm  text-opacity-80'>Samsung Electric Kettle</p>
            <p className='text-lg text-gray-950 font-bold'>ELECTRIC KETTLE</p>
            <p className='text-gray-700'>Best of the best</p>
            <p className='text-sm'>only-from</p>
            <p  className='textRed font-bold'>Ksh. 230</p>
        </div>
    </NavLink>
  )
}

export default Special
