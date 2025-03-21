import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'

const Special = () => {
  const [products, setProduct] = useState([]) 
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    try {
      api.get(`/products/?page_size=3`)
      .then(res => {
          // console.log(res.data > 1)
          if (res.data.results.length > 1) {
              setProduct(res.data.results[1])
              // console.log(res.data)
              setLoading(false)
          }else if (res.data.results.length > 0)
            setProduct(res.data.results[0])
            // console.log(res.data)
            setLoading(false)
      })
    }catch(error) {
      console.log(error.response)
      setLoading(false)
    }
  },[])
  return (
    <>
      {loading ? <Boilerplate display1="hidden" display="hidden" h="h-28"/>: <NavLink to={`/products/${products.title}`} className="bgYello block relative mx-3 p-4 rounded-md overflow-hidden ">
    <figure className='h-4/5 w-1/2 m-auto'>
        <img className='specialImg' src={require(products.image)} alt="" />
    </figure>
    <div className='absolute top-0 left-0 p-4 bg-opacity-15 w-full min-h-fit backdrop-brightness-95'>
        {/* <p className='text-white font-bold text-sm  text-opacity-80'>Order</p> */}
        <p className='text-lg text-gray-950 font-bold'>{products.title}</p>
        <p className='text-gray-700'>Best of the best</p>
        <p className='text-sm'>only-from</p>
        <p  className='textRed font-bold'>Ksh. {products.price}</p>
    </div>
</NavLink>}
    </>
  )
}

export default Special
