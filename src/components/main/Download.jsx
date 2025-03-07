import React from 'react'
import { TbBookDownload as Phone } from "react-icons/tb"; 'react-icons/hi2'
const Download = () => {
    const ph = [1,2,2]
  return (
    <div className='mx-3 my-5 rounded-md overflow-hidden borderGray'>
      {ph.map((p, index) => {
        return <div key={index} className='shadow-sm shadow-gray-300 p-4 px-5 flex items-center justify-evenly gap-4'>
            <Phone className='text-gray-600' size={20}/>
            <p className='text-gray-600'>Download the Flora app to your phone</p>
        </div>
      })}
    </div>
  )
}

export default Download
