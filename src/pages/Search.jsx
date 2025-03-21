import React, { useEffect, useState, useContext } from 'react'
import MainLayout from '../layout/MainLayout'
import EaseNav from '../components/ui/EaseNav'
import { NavLink, useLocation } from 'react-router-dom'
import api from '../js/api'
const Search = () => {
  const location = useLocation().pathname
  const [product, setProduct] = useState([]) 
  const [loading, setLoading] = useState(true)
  const pat = location.split("/")[2]
  const path = pat.includes("%20") ? pat.split("%20").join(" "): pat
  const data = async () => {
    try {
      const res  = await api.get(`/search/?search=${path}`)
      const dataz = res.data
      setProduct(dataz)
      console.log(dataz)
      setLoading(false)
    } catch(error) {
      console.warn(error)
    }
  }
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior:"smooth"})
    data()
  }, [path])
  return (
    <MainLayout>
      {/* <div className='w-5/6 mx-auto'> */}
      <EaseNav/>
      {/* </div> */}
        
        <div className='flex items-start justify-start mx-auto flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 borderGray w-5/6 mb-4 rounded-md'>
          {loading ? <p>Loading ...</p> : product.map((bes, index) => {
              return <NavLink to={`/products/${bes.title}`} key={index} className='p-3  borderGrayR bestWidth  -z-10 relative' >
                {bes.discount == 0 ? null: 
                  <p className='absolute top-2 bgSky text-sm px-1 rounded-sm text-white left-2 font-bold'>{Number(bes.discount / bes.price * 100).toFixed(0)}%</p> }
                  <img className="bestImg inline-block rounded-md" src={require(bes.image)} alt="" />
                  <p className='font-bold mt-4'>{bes.title}</p>
                  <p className='textGreen font-normal smText fontNewTimes '>{bes.item_number - bes.number_bought < 1 ? "OUT STOCK" : "IN STOCK"}</p>
                  <div className='flex gap-2 items-end my-2'>
                  {bes.discount > 0 ? 
                      <>
                        <p className='text-sm line-through text-gray-500 textNewTimes'>Ksh.2500</p>
                        <p className='textRed'>Ksh.2000</p>
                      </>:<p className='text-sm text-gray-500 textNewTimes'>Ksh.2500</p>
                    }
                  </div>
              </NavLink>
          })}
        </div>
    </MainLayout>
  )
}

export default Search
