import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
export default function CartegoriesLink() {
  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)
  useEffect(() => {
   try {
    api.get("/cartegorygroup/")
    .then(res => {
      // console.log(res.data)
      setData(res.data)
      setLoading(false)
    })
   } catch(error) {
    setLoading(false)
    console.warn(error)
   }
  },[])
  return ( 
    <>
      {
        loading ? [1,1,1].map(() => (<Boilerplate/>)) : <div className='bgWhitish'>
        <div className='p-3 lg:w-4/5 lg:m-auto pb-5 md:grid grid-cols-4 '>
          {loading ? <div>Loading...</div> : data.map((item, index) => (
            <div className='my-3 pb-2' key={item.id}>
              <h5 className='uppercase tracking-tighter text-gray-800 font-bold fontNewTimes'>{item.group_name}</h5>
              <div className='flex flex-col gap-1 mt-2 text-sm text-gray-600 items-start'>
                  {item.cartegory_group.map((group, index) => (
                    <NavLink to={`/cartegory/${group.cartegory_name}`}>{group.cartegory_name}</NavLink> 
                  ))}  
              </div>
            </div>
          ))}
        </div>
      </div>
      }
    </>
  )
}
