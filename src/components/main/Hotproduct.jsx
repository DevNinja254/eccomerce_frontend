import React,{useState, useEffect} from 'react'
import { BiArrowToRight as Arrow} from 'react-icons/bi'
import {NavLink} from "react-router-dom"
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
import Title from '../../boilerplate/Title'
const Hotproduct = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    try {
      api.get('/products/?page_size=1&offer=true')
    .then(res => {      
      if(res.data.results.length > 0) {
        setProduct(res.data.results[0])
        setLoading(false)
      }      
    })
    }catch(error) {
      console.warn(error)
      setLoading(false)
    }
  }, [])
  return (
    <div className='px-3 my-6'>
      {loading ? <Title/> : <div>
        <h1 className='font-bold '>HOT PRODUCT FOR THE WEEK</h1>
        <div className='flex gap-3 text-sm text-gray-700 items-center sm:justify-between justify-start mb-3'>
            <p>Don't miss this opportunity at a special discount just for this week</p>
            <NavLink className="flex items-center justify-start  gap-2 flex-nowrap borderGray opacity-70 p-1 rounded-full bg-opacity-20 px-2 " to="/cartegory/offer"><span className='whitespace-nowrap'>View All</span> <span><Arrow/></span></NavLink>
        </div>
      </div>}
      { loading ? 
        <Boilerplate h="h-40"/> :
      <NavLink to={`/products/${product.title}`} className="border-2 border-red-300 p-3 rounded-md relative my-4 block ">
        <p className='bgRed w-fit  text-white font-bold p-1 py-2 text-lg absolute top-1 rounded-full left-1'><span>{(product.discount / product.price * 100).toFixed(0)}%</span></p>
        <figure className=' w-4/5 m-auto mt-3 rounded-md overflow-hidden'>
            <img className='block' src={require(product.image)} alt="" />
        </figure>
        <div className='my-4 flex items-end justify-start gap-2'>
            <p className='text-sm line-through text-gray-700 font-mono'>Ksh.{product.price}</p>
            <p className='textRed font-bold font-mono text-lg'>Ksh.{product.price - product.discount}</p>
        </div>
        <p className='font-bold text-gray-950 text-opacity-90'>{product.title}</p>
        <p className='textGreen font-bold py-2 smText'>{product.item_number > product.number_bought ? "IN STOCK": <p className='textRed'>OUT STOCK</p>}</p>
        {/* <div className='flex justify-start gap-4 smMidText items-center'>
            <div className='flex items-center justify-start gap-1 flex-nowrap'>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
                <p>:</p>
                <p className='bg-gray-500 bg-opacity-25 text-gray-700 font-bold px-1'>59</p>
            </div>
            <p className='text-gray-700'>Remains until the end of the offer.</p>
        </div> */}
      </NavLink>}
    </div>
  )
}

export default Hotproduct
