import React from 'react'
import { PiPerson as Person } from 'react-icons/pi'

const Comment = () => {
  return (
    <div className='mx-3 my-5'>
      <h3 className='py-3 text-sm font-bold text-gray-800'>CUSTOMER COMMENT</h3>
      <div className='bgCream p-3 rounded-md'>
        <h4 className='fontNewTimes font-bold text-gray-700 text-sm'>The best markeplace</h4>
        <p className='smMidText tracking-wide text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor magnam pariatur amet vel provident error accusantium quibusdam, explicabo repudiandae?</p>
        <div className='flex gap-4 mt-4 items-center justify-start'>
            <figure className='w-14 h-14 rounded-full overflow-hidden'>
              <img className='inline-block w-full h-full object-cover' src={require("../../assets/images/banner-box2.jpg")} alt="" />
            </figure>
            <div>
                <p className='text-sm'>Jane Doe</p>
                <p className='smMidText text-gray-600'>Sales Manager</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
