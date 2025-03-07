import React from 'react'
import { MdMarkEmailRead as Email } from 'react-icons/md'

const Newsletter = () => {
  return (
    <div className='bgBlue'>
      <div className=' lg:w-4/5 lg:m-auto mt-4 p-3 pb-0 sm:text-lg md:grid md:grid-cols-3 md:gap-3'>
        <div>
          <p className='text-gray-100  py-2'><span className='border-b-gray-200 border-b-2 '>$20 discount</span> for your first order</p>

          <p className='text-xl text-white font-bold'>Join our Newsletter and <br/>get...</p>
          <div className='text-gray-50 text-opacity-60 text-sm pb-3'>
          <p >Join our email subscription now to get updates on promotions and coupons.</p>
          </div>
          <form action="" className='bg-white p-1 w-full rounded-md flex items-center my-2'>
            <input type="email" className='text-gray-700 outline-none text-sm p-2 flex-1' name='email' autoFocus required placeholder="Your email address" />
            <button className='bgBlue text-sm text-white p-2 rounded-md'>Subscribe</button>
          </form>
        </div>
        <figure className='col-span-2 '>
          <img src={require("../../assets/images/coupon.png")} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default Newsletter
