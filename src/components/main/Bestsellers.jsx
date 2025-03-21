import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { BiArrowToRight as Arrow } from 'react-icons/bi'
import api from '../../js/api'
import BoilerPlateHeading from '../../boilerplate/BoilerPlateHeading'
const Bestsellers = () => {
    const [best, setBest] = useState([])
    const [loading, setLoading] =  useState(true)
    useEffect(()=> {
      try {
        api.get('/products/?page_size=4')
        .then(res => {
          // console.log(res.data.results)
          if (res.data.results.length > 0) {
            setBest(res.data.results)
            setLoading(false)
          }
        })
      } catch(error) {
        console.warn(error.response)
        setLoading(false)
      }
      }, []) 
  return (
    <div className='px-3 my-3 sm:my-5'>
     {loading ? <BoilerPlateHeading/> : <>
      <h4 className='font-bold sm:mt-4'>BEST SELLERS</h4>
      <nav className='flex gap-3 sm:justify-between text-sm text-gray-700 items-center justify-start mb-3 sm:mb-5 '>
          <p >Do not miss the current offers until the end of March</p>
          <NavLink className="flex items-center justify-start  gap-2 flex-nowrap borderGray opacity-70 p-1 rounded-full bg-opacity-20 px-3 whitespace-nowrap  " to="/cartegory/best sellers">View All <span><Arrow/></span></NavLink>
      </nav>
      <div className={`borderGray3l w-full overflow-hidden`}>
        <div className='flex items-start justify-start w-full flex-wrap sm:grid sm:grid-cols-2 h- lg:grid-cols-3 xl:grid-cols-4'>
          {best.map((bes, index) => {
              return <NavLink to={`/products/${bes.title}`} key={index} className='p-3  borderGrayR bestWidth relative ' >
                {bes.discount == 0 ? null: 
                  <p className='absolute top-2 bgSky text-sm px-1 rounded-sm text-white left-2 font-bold'>{Number(bes.discount / bes.price * 100).toFixed(0)}%</p> }
                  <img className="bestImg rounded-md" src={require(bes.image)} alt="" />
                  <p className='font-bold mt-4'>{bes.title}</p>
                  <p className='textGreen font-normal smText fontNewTimes '>{bes.item_number - bes.number_bought < 1 ? "OUT STOCK" : "IN STOCK"}</p>
                  {/* <div className="flex items-center  justify-start gap-2">
                   <div className="flex items-center gap-1 justify-start">
                      {star.map((sta, index) => (index < 3 ? <Star className='bgYellow' size={13}/> : <Star1 className='bgYellow' size={13}/>))}
                    </div>
                  <p className='text-sm text-gray-600'>{bes.review.length}review</p>
                  </div> */}
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
      </div>
     </>}
    </div>
  )
}

export default Bestsellers
