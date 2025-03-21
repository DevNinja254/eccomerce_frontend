import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
const Discount = () => {
    const [products, setProduct] = useState([]) 
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
      try {
        api.get(`/products/?page_size=2&offer=true`)
        .then(res => {
            // console.log(res.data)
            if (res.data.results.length > 0) {
                setProduct(res.data.results)
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
    <div>
      { loading ? [1,1,].map(() => (<Boilerplate h="h-32" display="hidden"/> )):
        products.map((product, index) => {
            return <div key={index} className='bgWhitish grid grid-cols-2 mx-3 rounded-lg  overflow-hidden shadow-sm shadow-gray-300 '>
                <div className='p-4 py-6'>
                    <p className='text-sm fontNewTimes textGreen font-bold uppercase'>WEEKEND DISCOUNT {(product.discount / product.price * 100).toFixed(0)}%</p>
                    <p className='mt-2 text-lg font-bold text-opacity-90 text-gray-900 uppercase'>{product.title}</p>
                    <p className='capitalize text-sm text-gray-600'>Best of the best</p>
                    <NavLink className="my-2 bg-gray-400 px-2 inline-block py-2 rounded-full text-gray-100" to={`/products/${product.title}`}>Shop Now</NavLink>
                </div>
                <figure className='relative -z-10'>
                    <img className='h-full w-full discImg'  src={require(product.image)} alt="" />
                   
                </figure>
            </div>
        })
      }
    </div>
  )
}

export default Discount
