import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
const Trending = () => {
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(true) 
    useEffect(()=> {
    try {
      api.get('/products/?page_size=4')
      .then(res => {
        // console.log(res.data.results)
        if (res.data.results.length > 0) {
          setTrends(res.data.results)
          setLoading(false)
        }
      })
    } catch(error) {
      console.warn(error.response.data)
      setLoading(false)
    }
    }, []) 
  return (
    <div className='m-3'>
      {
        loading ? <div>
          {[1,1,1].map(() => (<Boilerplate h="h-28" display1={"hidden"} display2={"grid grid-cols-2 gap-2"}/>))}
        </div>: <>
        <h4 className='py-3 fontNewTimes font-bold text-lg tracking-wide text-gray-900'>Trending search</h4>
      <div className='borderGray p-5 rounded-md overflow-hidden'>
        {trends.map((trend, index) => {
            return (
                <NavLink to={`/products/${trend.title}`} key={index} className='grid grid-cols-4 gap-4 mt-3 mb-5 items-center'>
                  <figure className='p-1'>

                    <img className='inline-block object-cover w-full h-full' src={require(trend.image)} alt="" />
                  </figure>
                  <div className='col-span-3 flex flex-col items-start justify-between gap-3'>
                      <p className='font-sans font-bold text-gray-800'>{trend.title}</p>
                      <p className='textRed font-bold fontNewTimes tracking-tight'>Ksh. {trend.price}</p>
                  </div>
                </NavLink>
            )
        })}
      </div>
        </>
      }
      
    </div>
  )
}

export default Trending
