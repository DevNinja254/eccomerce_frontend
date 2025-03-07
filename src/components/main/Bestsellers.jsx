import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { BiArrowToRight as Arrow } from 'react-icons/bi'
const Bestsellers = () => {
    const best = [1, 2,3, 4] 
    const star = [1, 2,3, 4, 5]
  return (
    <div className='px-3 my-3'>
      <h4 className='font-bold sm:mt-4'>BEST SELLERS</h4>
      <nav className='flex gap-3 sm:justify-between text-sm text-gray-700 items-center justify-start mb-3 sm:mb-5 '>
          <p >Do not miss the current offers until the end of March</p>
          <NavLink className="flex items-center justify-start  gap-2 flex-nowrap borderGray opacity-70 p-1 rounded-full bg-opacity-20 px-3 whitespace-nowrap " to="/cartegory/best sellers">View All <span><Arrow/></span></NavLink>
      </nav>
      <div className='borderGray3l w-full overflow-hidden'>
        <div className='flex items-start justify-start w-full flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {best.map((bes, index) => {
              return <NavLink to="/products/Hot Kettle for cookers" key={index} className='p-3  borderGrayR bestWidth relative' >
                  <p className='absolute top-2 bgSky text-sm px-1 rounded-sm text-white left-2 font-bold'>22%</p>
                  <img className="bestImg rounded-md" src={require("../../assets/images/kettle.jpg")} alt="" />
                  <p className='font-bold mt-4'>Hot Kettle for cookers</p>
                  <p className='textGreen font-normal smText fontNewTimes '>IN STOCK</p>
                  <div className="flex items-center  justify-start gap-2">
                   <div className="flex items-center gap-1 justify-start">
                      {star.map((sta, index) => (index < 3 ? <Star className='bgYellow' size={13}/> : <Star1 className='bgYellow' size={13}/>))}
                    </div>
                  <p className='text-sm text-gray-600'>1review</p>
                  </div>
                  <div className='flex gap-2 items-end my-2'>
                      <p className='text-sm line-through text-gray-500 textNewTimes'>Ksh.2500</p>
                      <p className='textRed'>Ksh.2000</p>
                  </div>
              </NavLink>
          })}
        </div>
      </div>
    </div>
  )
}

export default Bestsellers
