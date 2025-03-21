import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
const Onmarket = () => {
  const [products, setProduct] = useState([]) 
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    try {
      api.get(`/products/?page_size=3`)
      .then(res => {
          // console.log(res.data > 1)
          if (res.data.results.length >= 2) {
              setProduct(res.data.results[2])
              // console.log(res.data)
              setLoading(false)
          }
      })
    }catch(error) {
      console.log(error.response)
      setLoading(false)
    }
  },[])
  return (
    <>
    {loading ? <Boilerplate h="h-28" display={"hidden"}/> : <div to="#" className='mx-3 my-4 rounded-lg overflow-hidden block relative'>
        <figure>
            <img className='arrivedImg' src={require(products.image)} alt="" />
        </figure>
        <div className='absolute top-4 left-5 arrived' >
            <p className='text-sm text-gray-600 capitalize py-2 font-bold'>Just Arrived</p>
            <p className='uppercase text-lg text-gray-950 text-opacity-80'>{products.title}</p>
            <p className='font-bold capitalize py-2'>With warrant</p>
            <p className='text-gray-950 pt-2'>only-from</p>
            <p className='text-lg pb-3 textRed font-bold'>Ksh. {products.price}</p>
            <NavLink className="inline-block bgSky text-gray-100 text-sm p-1 rounded-full" to={`/products/${products.title}`}>Shop Now</NavLink>
        </div>
    </div>}
    </>
  )
}
export default Onmarket
