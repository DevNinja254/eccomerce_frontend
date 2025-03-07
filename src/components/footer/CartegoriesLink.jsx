import React from 'react'
import { NavLink } from 'react-router-dom'
export default function CartegoriesLink() {
  return ( 
    <div className='bgWhitish'>
      <div className='p-3 lg:w-4/5 lg:m-auto pb-5 md:grid grid-cols-4 '>
        <div className='my-3 pb-2'>
          <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>Kitchen</h5>
          <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
              <NavLink to="/cartegory/kitchen">Kettles</NavLink>
              <NavLink to="/cartegory/kitchen">Kettle2</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles3</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles4</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles5</NavLink>
          </div>
        </div>
        <div className='my-3 pb-2'>
          <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>Kitchen2</h5>
          <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
              <NavLink to="/cartegory/kitchen">Kettles</NavLink>
              <NavLink to="/cartegory/kitchen">Kettle2</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles3</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles4</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles5</NavLink>
          </div>
        </div>
        <div className='my-3 pb-2'>
          <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>Kitchen3</h5>
          <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
              <NavLink to="/cartegory/kitchen">Kettles</NavLink>
              <NavLink to="/cartegory/kitchen">Kettle2</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles3</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles4</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles5</NavLink>
          </div>
        </div>
        <div className='my-3 pb-2'>
          <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>Kitchen4</h5>
          <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
              <NavLink to="/cartegory/kitchen">Kettles</NavLink>
              <NavLink to="/cartegory/kitchen">Kettle2</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles3</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles4</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles5</NavLink>
          </div>
        </div>
        <div className='my-3 pb-2'>
          <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>Kitchen4</h5>
          <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
              <NavLink to="/cartegory/kitchen">Kettles</NavLink>
              <NavLink to="/cartegory/kitchen">Kettle2</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles3</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles4</NavLink>
              <NavLink to="/cartegory/kitchen">Kettles5</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
