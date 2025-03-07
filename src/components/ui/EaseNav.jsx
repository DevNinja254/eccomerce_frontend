import React, {useEffect} from 'react'
import { MdKeyboardArrowRight as Arrow} from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
const EaseNav = ({}) => {
   let paths = []
   const location =  useLocation().pathname.split("/")
   for (const data of location) {

    if (data.includes("%20")) {
      paths.push(data.split("%20").join(" "))
      continue
    }
    paths.push(data)
   }
    useEffect(()=> {
        document.title = paths[-1]
    })
    paths.shift()
  return (
    <div className='flex items-center pb-3 fontNewTimes smMidText gap-1  sm:w-full w-5/6 mx-auto uppercase lg:w-4/5'>
        <NavLink className="text-gray-900 hover:text-sky-500 transition-all duration-100 ease-linear" to="/">HOME</NavLink>
        
        {paths.map((dat, index) => {
         return  index < paths.length - 1 ? <>
            <Arrow/>
           <NavLink className="text-gray-900 hover:text-sky-500 transition-all duration-100 ease-linear" to={`/${dat}`}>{dat}</NavLink>
          </> : <>
          <Arrow/>
          <NavLink className="hover:text-sky-300 text-sky-500 transition-all duration-100 ease-linear">{dat}</NavLink>
          </>
        })}
    </div>
  )
}

export default EaseNav
