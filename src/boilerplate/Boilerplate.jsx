import React from 'react'

const Boilerplate = ({h,display, display1, display2 }) => {
  return (
    <div className={`m-4 ${display2}`}>
      <div id='mainSection' className={`w-full ${h} bg-black rounded-md bg-opacity-20`}></div>
      <div className={`${display1} bg-gray-700 w- full bg-opacity-15 h-6 my-2 rounded-md`}></div>
      <div className={`${display} grid-cols-2 gap-4 ${display == "grid" ? "w-full": "w-4/5"} `}>
        <div className={`bg-gray-700 bg-opacity-15 h-6 my-2 rounded-md`}></div>
        <div className='bg-gray-700 bg-opacity-15 h-6 my-2 rounded-md '></div>
      </div>
    </div>
  )
}

export default Boilerplate
