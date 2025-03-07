import React from 'react'

const Superdiscount = () => {
  return (
    <div className="bgRedFade mx-3 p-3 rounded-md text-center">
      <p className='textRed '>Super discount for your <span className='font-bold'>first purchase.</span></p>
      <span className='flex items-center justify-center mb-2 gap-3'>
        <p className='borderRedDotted rounded-full px-2 py-1 text-sm textRed font-bold mt-1'>FREE25BAC</p>
        <p className='smMidText text-gray-700'>Use discount in checkout</p>
      </span>
    </div>
  ) 
}

export default Superdiscount
