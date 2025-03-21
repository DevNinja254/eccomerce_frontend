import React, { useEffect, useState } from 'react'
import { PiPerson as Person } from 'react-icons/pi'
import Boilerplate from '../../boilerplate/Boilerplate'

const Comment = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 1000);
  }, [])
  return (
    <div className='mx-3 my-5'>
      {
        loading ? <div>
          <Boilerplate h="h-5" display={"hidden"} display1={"hidden"}/>
          <Boilerplate h="h-28" display={"hidden"} display1={"hidden"}/>
        </div> : <>
          <h3 className='py-3 text-sm font-bold text-gray-800'>CUSTOMER COMMENT</h3>
      <div className='bgCream p-3 rounded-md'>
        <h4 className='fontNewTimes font-bold text-gray-700 text-sm'>The best markeplace</h4>
        <p className='smMidText tracking-wide text-gray-600'>I appreciate the team's hard work and dedication in achieving our sales goals this month.</p>
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
        </>
      }
      
    </div>
  )
}

export default Comment
