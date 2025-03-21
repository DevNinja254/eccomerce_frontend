import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import EaseNav from './EaseNav'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom'
import api from '../../js/api'
import Product from '../../boilerplate/Product'
const Products = () => {
  const location = useLocation().pathname
  const [cartegory, setCartegory] = useState([]) 
  const [loading, setLoading] = useState(true)
  const star = [1, 2,3, 4, 5]
  useEffect(()=> {
    const pat = location.split("/")[1]
    // console.log(pat)
    const path = pat.includes("%20") ? pat.split("%20").join(" "): pat
    window.scrollTo({top:0, left:0, behavior:"instant"})
    try {
      api.get(`/cartegory/`)
      .then(res => {
        setCartegory(res.data)
        // console.log(res.data)
        setLoading(false)
      })
    }catch(error) {
      console.log(error.response)
      setLoading(false)
    }
  },[])
  return (
    <MainLayout>
      {/* <div className='w-5/6 mx-auto'> */}
      <EaseNav/>
      {/* </div> */}
        
        {loading ? <Product/> : <div className='flex items-start justify-start mx-auto flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 borderGray w-5/6 mb-4 rounded-md'>
          { cartegory.map((bes, index) => {
              return <NavLink to={`/cartegory/${bes.cartegory_name}`} key={index} className='p-3  borderGrayR bestWidth relative' >
                  
                  <img className="bestImg inline-block rounded-md" src={require(bes.cartegory_image)} alt="" />
                  <p className='font-bold mt-4'>{`${bes.cartegory_name}`}</p>
                  <p className='textGreen font-normal smText fontNewTimes '>{bes.product_cartegory.length} IN STOCK</p>
              </NavLink>
          })}
        </div>}
    </MainLayout>
  )
}

export default Products
