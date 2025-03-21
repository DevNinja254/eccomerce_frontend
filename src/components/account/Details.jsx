import React, { useState, useEffect } from 'react'
import FormDetail from './FormDetail'
import DefaultDetails from './DefaultDetails'
const Details = ({info, profile}) => {
  const [edit, setEdit] = useState(false)
  const [update, setupdate] = useState(false)
 const editing = (value) => {
  setEdit(value)
 }
const updated = value => {
  setupdate(value)
}
if (update) {
  setTimeout(() => {
    setupdate(false)
  }, 3000)
}
  return (
    <div className="mt-7 mx-3">
      <h1 className=' my-3 text-lg font-bold fontNewTimes tracking-wide text-gray-800'>Account Details</h1>
      {
        update ? <div className='text-center text-sm py-3 grid place-content-center text-green-600 '><p className='w-fit bg-red-400 bg-opacity-15 p-3 font-bold  rounded-md'>Account details update successful</p></div> : null
      }
      <div className='borderGray rounded-md'>
          {edit == false ? <DefaultDetails info = {info} profile={profile} editing={editing}/>: <FormDetail updated={updated} editing = {editing} profile={profile}/>}
      </div>
    </div>
  )
}

export default Details
