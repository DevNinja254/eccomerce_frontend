import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import EaseNav from './EaseNav'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom'
import api from '../../js/api'
import { title } from '../../js/title'
import Product from '../../boilerplate/Product'
import Header from './Header'
import Footer from './Footer'
const Products = () => {
  const location = useLocation().pathname
  const [product, setProduct] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [anyProduct, setAnyProduct] = useState(false)
  
  const pat = location.split("/")[2]
  // title("hello")
  useEffect(()=> {
    window.scrollTo({top: 0})
    if (!pat) {
      try {
        api.get('/products/?page_size=10')
        .then(res => {
          setProduct(res.data.results)
          setLoading(false)
        })
      }catch(error) {
        console.log(error)
        setLoading(false)
      }
    }else {
      try {
        const path = pat.includes("%20") ? pat.split("%20").join(" "): pat
        const encodedCategoryName = encodeURIComponent(path)
        console.log(encodedCategoryName)
        let url = `/products/?cartegory=${encodedCategoryName}&exclusive=unknown&offer=unknown&trending=unknown&title=&date_uploaded=&pk=&general=`
        if (path == 'offers') {
          url = `/products/?offer=true`
        }
       
        if (path == 'new') {
          const date = new Date()
          let days = 14 * 24 * 60 * 60 * 1000
          let newDate = new Date(date.getTime() - days)
          const day = newDate.getDate()
          const month = newDate.getMonth() + 1
          const year = newDate.getFullYear()
          console.log(`${year}-${month}-${day}, ${newDate}`)
          url = `/products/?cartegory=&exclusive=unknown&offer=unknown&trending=unknown&title=&date_uploaded=${year}-${month}-${day}+00%3A30%3A45.123456%2B00%3A00&pk=&general=`
        }
        if(path== 'trending') {
          url = `/products/?trending=true`
        }
        api.get(url)
        .then(res => {
          setProduct(res.data.results)
          console.log(res.data.results)
          setLoading(false)
        })
      }catch(error) {
        console.log(error)
        setLoading(false)
      }}
  }, [pat])
  return (
    <>
    <Header/>
      {/* <div className='w-5/6 mx-auto'> */}
      <EaseNav/>
      {/* </div> */}
        
        { loading ? <Product/> :<div className='flex items-start justify-start mx-auto flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 borderGray w-5/6 mb-4 rounded-md'>
          {product.map((bes, index) => {
              return <NavLink to={`/products/${bes.title}`} key={index} className='p-3  borderGrayR bestWidth relative ' >
                {bes.discount == 0 ? null: 
                  <p className='absolute top-2 bgSky text-sm px-1 rounded-sm text-white left-2 font-bold -z-10'>{Number(bes.discount / bes.price * 100).toFixed(0)}%</p> }
                  <img className="bestImg -z-20 relative inline-block rounded-md" src={require(bes.image)} alt="" />
                  <p className='font-bold mt-4 -z-20  relative'>{bes.title}</p>
                  <p className='textGreen font-normal smText fontNewTimes -z-20  relative '>{bes.item_number - bes.number_bought < 1 ? "OUT STOCK" : "IN STOCK"}</p>
                  <div className='flex gap-2 items-end my-2 -z-20  relative'>
                  {bes.discount > 0 ? 
                      <>
                        <p className='text-sm line-through text-gray-500 textNewTimes'>Ksh.2500</p>
                        <p className='textRed'>Ksh.2000</p>
                      </>:<p className='text-sm text-gray-500 textNewTimes'>Ksh.2500</p>
                    }
                  </div>
              </NavLink>
          })}
        </div>}
        <Footer/>
    </>
  )
}

export default Products
