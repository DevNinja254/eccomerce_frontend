import React from 'react'
import { BiArrowToRight as Arrow} from 'react-icons/bi'
import {NavLink} from "react-router-dom"
const Hotproduct = () => {
  return (
    <div className='px-3 my-6'>
      <div>
        <h1 className='font-bold '>HOT PRODUCT FOR THE WEEK</h1>
        <div className='flex gap-3 text-sm text-gray-700 items-center sm:justify-between justify-start mb-3'>
            <p>Don't miss this opportunity at a special discount just for this week</p>
            <NavLink className="flex items-center justify-start  gap-2 flex-nowrap borderGray opacity-70 p-1 rounded-full bg-opacity-20 px-2 " to="/cartegory/offer"><span className='whitespace-nowrap'>View All</span> <span><Arrow/></span></NavLink>
        </div>
      </div>
      <NavLink to="/products/chombani Electric Kettle" className="border-2 border-red-300 p-3 rounded-md relative my-4 block">
        <p className='bgRed w-fit  text-white font-bold p-1 py-2 text-lg absolute top-1 rounded-full left-1'><span>18%</span></p>
        <figure className=' w-4/5 m-auto mt-3 rounded-md overflow-hidden'>
            <img className='block' src={require("../../assets/images/kettle.jpg")} alt="" />
        </figure>
        <div className='my-4 flex items-end justify-start gap-2'>
            <p className='text-sm line-through text-gray-700 font-mono'>Ksh.2300</p>
            <p className='textRed font-bold font-mono text-lg'>Ksh.2200</p>
        </div>
        <p className='font-bold text-gray-950 text-opacity-90'>Chombani Electric Kettle</p>
        <p className='textGreen font-bold py-2 smText'>IN STOCK</p>
        <div className='flex justify-start gap-4 smMidText items-center'>
            <div className='flex items-center justify-start gap-1 flex-nowrap'>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
            </div>
            <p className='text-gray-700'>Remains until the end of the offer.</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Hotproduct
