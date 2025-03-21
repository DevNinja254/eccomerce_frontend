import React, {useState, useEffect} from 'react'
import { CiDeliveryTruck as Truck } from 'react-icons/ci'
import { RiCoupon2Line as Coupon } from 'react-icons/ri'
import { BiDollarCircle as Dollar } from 'react-icons/bi'
import Boilerplate from '../../boilerplate/Boilerplate'
const Brag = () => {
  const [loading, setLoading] = useState(false)
  //  useEffect(() => {
  //         setTimeout(() => {
  //             setLoading(false)
  //         }, 10);
  //       }, [])
  return (
    <>
      {loading ? <div className='grid sm:place-content-center grid-cols-2 sm:flex md:justify-evenly'>{[1,1,1].map(() => (<Boilerplate h="h-10" display={"hidden"} display2={"grid grid-cols-2 gap-2"}/>))}</div> : <div className='p-6 text-sm border-gray-500 border-b-2 border-opacity-15 mb-4 sm:grid sm:place-content-center md:flex md:justify-evenly'>
      <div className='flex text-gray-700 items-center justify-start gap-4 my-2'>
          <div>
            <Truck className="" size={25}/>
        </div>
        <p>Free delivery for order over $70</p>
      <div className='flex text-gray-700 items-center justify-start gap-4 my-2'>
        <div>
            <Coupon size={25}/>
        </div>
        <p>Daily Mega Discount</p>
      </div>
      <div className='flex text-gray-700 items-center justify-start gap-4 my-2'>
        <div>
            <Dollar size={25}/>
        </div>
        <p>Best price on the market</p>
        </div>
      </div>
    </div>}
    </>
  )
}

export default Brag
