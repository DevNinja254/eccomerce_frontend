import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowFromLeft as Arrow } from 'react-icons/bi'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
const Exclusiveoffer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [exclusive, setExclusive] = useState({
    calculated_discount: "",
    price: 0,
    title: "",
    image: ""
  })
  useEffect(() => {
    const data = async() => {
      try {
        const res = await api.get("/products/?exclusive=true")
        setExclusive(res.data.results[0])
        setIsLoading(false)
      }catch(error) {
        setIsLoading(false)
        console.warn(error)
      }
    }
    data()
  },[])
  return (
    <div className='p-3 rounded-md w-full relative mb-9'>
      {isLoading ? <Boilerplate h="h-40"/> : <>
        <figure className='w-full'>
        <img className='imgHeight absolute top-4 left-3 block rounded-md w-full -z-10' style={{
          minHeight: "100%"
        }} src={require(exclusive.image)} alt="" />
      </figure>
      <div className=' p-4 bg-opacity-30 w-full h-full rounded-md bg-black m-3'>
        <span className='flex items-center justify-start gap-5 py-3 '>
            <p className='text-sm fontNewTimes text-gray-50 font-bold'>EXCLUSIVE OFFER</p>
            <p className='text-green-200 font-bold bgGreenFade rounded-full px-2 text-sm py-1'>-{exclusive.calculated_discount}% OFF</p>
        </span>
        <p className='text-xl font-bold text-gray-50'>Special in the <br/> {exclusive.title}</p>
        <p className='py-2 capitalize text-gray-100 '>only this week. Don't miss...</p>
        <p className='text-sm textGreen'>from <span className='textRed text-lg font-bold'>Ksh. {exclusive.price}</span></p>
        <NavLink className="bgSky text-white py-2 px-3 mt-3 w-fit gap-2 font-bold rounded-full flex items-center" to={`/products/${exclusive.title}`}>Shop Now <Arrow size={25}/></NavLink>
      </div>
      </>}
    </div> 
  )
}

export default Exclusiveoffer
