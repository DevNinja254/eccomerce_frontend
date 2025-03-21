import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import Boilerplate from '../../boilerplate/Boilerplate'
const Takencare = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <>
    { isLoading ? <Boilerplate h="h-36" display="hidden"/> :<NavLink to="#" className="mx-3 block bgCream px-4 my-4 text-center">
      <div className="py-2 text-sm text-gray-600 tracing-wide rounded-md">
        <p className='text-gray-600'>ALways Taking Care</p>
        <p className='text-lg font-bold'>In store or online Your health & safety is our top priority.</p>
      </div>
      <figure className="w-4/5 m-auto">
        <img className="block w-full careImg" src={require("../../assets/images/banner-box2.jpg")} alt=""/>
      </figure>
    </NavLink>}
    </>
  )
}

export default Takencare
