import React, { useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import EaseNav from './EaseNav'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation().pathname
  const best = [1, 2,3, 1,1,4] 
  const star = [1, 2,3, 4, 5]
  useEffect(()=> {
    const pat = location.split("/")[1]
    // console.log(pat)
    const path = pat.includes("%20") ? pat.split("%20").join(" "): pat
    document.title = path
    window.scrollTo({top:0, left:0, behavior:"instant"})
  })
  return (
    <MainLayout>
      {/* <div className='w-5/6 mx-auto'> */}
      <EaseNav/>
      {/* </div> */}
        
        <div className='flex items-start justify-start mx-auto flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 borderGray w-5/6 mb-4 rounded-md'>
          {best.map((bes, index) => {
              return <NavLink to={`/cartegory/cart ${index}`} key={index} className='p-3  borderGrayR bestWidth relative' >
                  
                  <img className="bestImg inline-block rounded-md" src={require("../../assets/images/kettle.jpg")} alt="" />
                  <p className='font-bold mt-4'>{`cartegory ${index}`}</p>
                  <p className='textGreen font-normal smText fontNewTimes '>20 IN STOCK</p>
              </NavLink>
          })}
        </div>
    </MainLayout>
  )
}

export default Products
