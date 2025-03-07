import React from 'react'
import { NavLink } from 'react-router-dom'

const Cartegories = () => {
    const carts = [1,1,1,1,1,1,1,1]

  return (
    <div className='m-3 borderGray rounded-md sm:grid grid-cols-2 lg:grid-cols-5 lg:items-center'>
      <NavLink className='p-4 borderGrayB sm:border-none mb-4' to="/cartegory/kettles">
        <figure className='w-2/3 m-auto py-3'>
            <img src={require("../../assets/images/kettle.jpg")} alt="" />
        </figure>
        <p className='text-center text-sm capitalize mb-1'>Kettles</p>
        <p className='text-center text-gray-600 text-sm'>12 items</p>
      </NavLink>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:col-span-4'>
        {carts.map((cart, index) => {
            return <NavLink to={`/cartegory/cart ${index}`} key={index}  className=' p-3'>
            <figure className='p-2' >
                <img className='inline-block object-cover' src={require("../../assets/images/kettle.jpg")} alt="" />
            </figure>
            <p className='text-center text-sm text-gray-700'>Cartegory {index + 1}</p>
            <p className='smMidText text-center text-gray-500'>12 items</p>
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default Cartegories
