import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import { BiArrowToRight as Arrow} from 'react-icons/bi'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import api from '../../js/api'
import Boilerplate from '../../boilerplate/Boilerplate'
import BoilerPlateHeading from '../../boilerplate/BoilerPlateHeading'
const Newproducts = () => {
    const [products, setProduct] = useState([]) 
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
      try {
        api.get(`/products/?page_size=5`)
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
    const array = [1,1,1,1]
  return (
    <div className='px-3 my-3'>
      {loading ? <BoilerPlateHeading/> : <>
        <div>
            <h1 className='font-bold '>NEW PRODUCTS</h1>
            <div  className='flex gap-3 text-sm text-gray-700 items-center justify-start mb-3'>
                <p>New products with updated stocks</p>
                <NavLink className="flex items-center justify-start  gap-2 flex-nowrap bg-gray-500 p-1 rounded-full bg-opacity-20 px-3 " to="/cartegory/new">View All <span><Arrow/></span></NavLink>
            </div>
        </div>
        <div className='grid grid-cols-2 items-start justify-start w-full flex-wrap borderGrayL borderGrayT sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:mb-5'>
            {products.map((product, index) => {
                return <NavLink to={`/products/${product.title}`} key={index} className='p-3  borderGrayR  sm borderGrayB  hover:cursor-pointer bg-gray-50 hover:bg-white'>
                    <img className="newImg rounded-md" src={require(product.image)} alt="" />
                    <p className='font-bold mt-4'>{product.title}</p>
                    <p className='textGreen font-bold smText fontNewTimes '>{product.item_number - product.number_bought} IN STOCK</p>
                    {/* <div className="flex items-center  justify-start gap-2">
                        <div className="flex items-center gap-1 justify-start">
                            {star.map((sta, index) => (index < 3 ? <Star className='bgYellow' size={13}/> : <Star1 className='bgYellow' size={13}/>))}
                        </div>
                        <p className='text-sm text-gray-600'>{product.review.length}review</p>
                    </div> */}
                    <div className='flex gap-2 items-end my-2'>
                        <p className='textRed font-bold'>Ksh.{product.price}</p>
                    </div>
                </NavLink>
            })}
         </div>
      </>}
    </div>
  )
}

export default Newproducts
