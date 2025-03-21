import React, {useSate, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'

const Cartegories = () => {
    const [carts, setCarts] =useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      try {
        api.get('/cartegory/')
      .then(res => {
        // console.log(res.data)
        setCarts(res.data)
        setIsLoading(false)
      }
      )
      } catch (error) {
        setIsLoading(false)
        console.warn(error)
      }
    }, [])

  return (
    <div className='m-3 borderGray rounded-md sm:grid grid-cols-2 lg:grid-cols-5 lg:items-center'>
     {isLoading ? <Boilerplate h="h-32" display1={"hidden"}/> : <NavLink className='p-4 borderGrayB sm:border-none mb-4' to={`/cartegory/${carts[0].cartegory_name}`}>
        <figure className='w-2/3 m-auto py-3'>
            <img src={require(carts[0].cartegory_image)} alt="" />
        </figure>
        <p className='text-center text-sm capitalize mb-1'>{carts[0].cartegory_name}</p>
        <p className='text-center text-gray-600 text-sm'>{carts[0].product_cartegory.length} items</p>
      </NavLink>}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:col-span-4'>
        {isLoading ? [1,1,1,1,1,1].map(() => (<Boilerplate h="h-24" display1={"hidden"}/>)) :carts.map((cart, index) => {
            return <NavLink to={`/cartegory/${cart.cartegory_name}`} key={index}  className=' p-3'>
            <figure className='p-2 h-full' >
                <img className='inline-block object-cover min-h-full' src={require(cart.cartegory_image)} alt="" />
            </figure>
            <p className='text-center text-sm text-gray-700'>{cart.cartegory_name}</p>
            <p className='smMidText text-center text-gray-500'>{cart.product_cartegory.length} items</p>
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default Cartegories
