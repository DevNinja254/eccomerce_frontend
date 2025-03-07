import React, { useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { MdKeyboardArrowRight as Arrow} from "react-icons/md";
import { BsStarFill as Star} from 'react-icons/bs'
import { BsStar as Star1} from 'react-icons/bs'
import { RiArrowLeftWideLine as ArrowL } from "react-icons/ri";
import { TiSocialTwitter as Twitter} from "react-icons/ti";
import { FaLinkedinIn as Linkedln} from "react-icons/fa";
import { TiSocialFacebook as Facebook} from "react-icons/ti";
import { TiSocialPinterest as Pinterest} from "react-icons/ti";
import { AiFillRedditCircle as Reddit } from "react-icons/ai";
import { TbBrandWhatsapp as Whatsapp} from "react-icons/tb";
import { GoPerson as Account} from "react-icons/go";
import { FaMinus as Subtract } from "react-icons/fa";
import EaseNav from '../components/ui/EaseNav';
import { IoMdAdd as Add } from "react-icons/io";
import axios from 'axios';
const Product = ({settingCart}) => {
  let exist = false
  const [itemData, setItemdata] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [item, setItem] = useState(1)
  const [added, setAdded] = useState(false)
  const location = useLocation().pathname
  const pat = location.split("/")[2]
  const path = pat.includes("%20") ? pat.split("%20").join(" "): pat
  const star = [1, 2,3, 4, 5].reverse()
  const productCart = localStorage.getItem("cart")
  const range = (num) => {
    return star.map((sta, index) => (index < num ? <Star className='bgYellow' key={index} size={13}/> : <Star1 className='bgYellow' key={index} size={13}/>))
  }
  document.title = path
  const existFunc = (id) => {
    if (productCart) {
      const itemExist = JSON.parse(productCart)
      for (const editCart of itemExist) {
        if (editCart.itemId == id) {
          console.log("est")
          exist = true
        } else {
          exist = false
        }
      }
  }}
  existFunc(itemData.id)
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:"instant"})
    existFunc(itemData.id) 
    const data = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/products/?pk=${path}`)
        setLoaded(true)
        setItemdata(res.data.results[0])

      }catch(error) {
        console.warn(error)
      }
      
    }
    data()
  }, [])
  const review = () => {
      if(loaded){
      let totalReview = 0
      for (const staz of itemData.review) {
        totalReview += staz.star
      }
      
      return(totalReview / (5 * itemData.review.length) * 5)
    }
  }
  const rate = star.map((sta, index) => (index < review() ? <Star className='bgYellow' key={index} size={13}/> : <Star1 className='bgYellow' key={index} size={13}/>))
    const basedRate = (rat) => {
      let num = 0
      for(const rate of itemData.review) {
        if (rate.star == rat) {
          num += 1
        }
      }
      return num
    }
    const addCart = () => {
      setAdded(true)
      const productCart = localStorage.getItem("cart")
      if (productCart && JSON.parse(productCart).length != 0) {
        const itemExist = JSON.parse(productCart)
        for (const editCart of itemExist) {
          if (editCart.itemId == itemData.id) {
            editCart.quantity = item
            localStorage.setItem("cart", JSON.stringify(itemExist))
            existFunc(itemData.id)
          }
        }
        
      } else {
        const productToCart = [
          {
            "itemId": itemData.id,
            "quantity": item,
            "image": itemData.image,
            "title": itemData.title,
            "price": itemData.price,
            "itemnumber": itemData.item_number - itemData.number_bought
          }
        ]
        localStorage.setItem("cart", JSON.stringify(productToCart))
      existFunc(itemData.id) 
        
        // setAdded(true)
      }
      settingCart(JSON.parse(localStorage.getItem("cart")))
    }
    if (added) {
      setTimeout(() => {
        setAdded(false)
      }, 3000)
    }
    // const settingExist = (va)
    // exist function

  return (
    <MainLayout hek={"heki"}>
      <div className='bg-gray-100 p-3 pt-0'>
        <EaseNav />
        <div className={`fixed top-4 right-5 z-20 bg-white p-3 shadow-md shadow-green-500 ${added ? "block": "hidden"}`}>
          <p className='text-sm font-mono textGreen capitalize'>{itemData.title} {exist ? "Cart Updated" : "added to cart"}.</p>
        </div>
        {
          loaded ? <>
            <div className='m-3 bg-white p-3 xl:w-5/6 2xl:w-4/5 xl:mx-auto rounded-md'>
          <h2 className='text-gray-950 font-bold '>{itemData.title}</h2>
         
          <div className='my-3 sm:flex items-center gap-3'>
            <p className='text-gray-600 text-sm fontNewTimes'>Brand: <span className='text-gray-800 font-bold text-opacity-80'>{itemData.brand}</span></p>
            <div className="flex items-center  justify-start gap-2 sm:m-0 mb-2">
                  <div className="flex items-center gap-1 justify-start">
                    {rate}
                  </div>
                <p className='text-sm text-gray-600'>{itemData.review.length}review</p>
            </div>
            <div className='flex borderGray w-fit border-r-0 items-center gap-1 text-gray-600 rounded-sm'>
              <p>Flora</p>
              <ArrowL/>
            </div>
          </div>
        <div className='md:grid md:grid-cols-2 gap-3'>
          <figure className='w-5/6 m-auto my-5 '>
            <img className='productImg' src={require(itemData.image)} alt="" />
          </figure>
          <div>
            <div className='mb-2'>
              <p >{
                itemData.discount > 0 ?<>
                  <span className='text-sm text-gray-600 line-through fontNewTimes'>ksh.{itemData.price} </span> <span className='px-1 textRed font-bold capitalize fontNewTimes'> ksh.{itemData.price - itemData.discount}</span>
                </> :  <span className='text-sm text-gray-600 fontNewTimes'>ksh.{itemData.price} </span>
                }</p>
              <p className='smMidText'>Taxes Included</p>
            </div>
            <p className='fontNewTimes textGreen font-bold smMidText mb-3'>{itemData.item_number >= itemData.number_bought ? "IN STOCK": "OUT STOCK"}</p>
            <p className='text-sm text-gray-900 text-opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus minus. Dolorum vel impedit facere iure, explicabo quidem nobis exercitationem!</p>
            <div className='flex items-center justify-between w-4/5 my-3'>
              <div className='flex items-center gap-4 '>
                <div className='text-gray-700 bg-gray-600 bg-opacity-20 p-3 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={() => {
                  item > 1 ? setItem(item - 1) : setItem(itemData.item_number)
                }}><Subtract size={13}/></div>
                <p className='text-lg text-gray-700'>{item}</p>
                <div className='text-gray-700 bg-gray-600 bg-opacity-20 p-3 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={() => {
                  item < itemData.item_number ? setItem(item + 1) : setItem(1)
                }}><Add/></div>
              </div>
              <p className='bgBlue text-gray-100 smMidText font-bold self-stretch grid place-content-center px-3 rounded-full hover:opacity-80 transition-all duration-100 ease-linear hover:cursor-pointer' onClick={addCart}>{exist ? "Update" : "Add to cart"}</p>
            </div>
            <div className='borderGrayY py-4 my-4'>
              <h5 className='text-sm pb-1'>Product details</h5>
              <div className='pl-2 smMidText text-gray-900 text-opacity-70'>
                <p>{itemData.product_details}</p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <div className=' text-white bgBlue p-2 opacity-80 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Facebook/>
              </div>
              <div className=' text-white bg-sky-400 p-2 opacity-100 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Twitter/>
              </div>
              <div className=' text-white bgRed p-2 opacity-100 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Pinterest/>
              </div>
              <div className=' text-white bgBlue p-2 opacity-90 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Linkedln/>
              </div>
              <div className=' text-white bg-orange-700 p-2 opacity-100 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Reddit/>
              </div>
              <div className=' text-white bg-green-600 p-2 opacity-100 hover:cursor-pointer hover:opacity-70 transition-all duration-100 ease-linear rounded-full'>
                <Whatsapp/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='m-3 bg-white mt-6 p-3 rounded-md'>
          <h3 className='text-center font-bold text-gray-700'>CUSTOMER REVIEWS</h3>
          <div className='grid place-content-center '>
            <div className='flex gap-3 mt-3 items-center justify-center w-full '>
              <div className='flex gap-1'>{rate}</div>
              <p className='text-gray-600 font-bold text-sm '> {Number(review()).toFixed(0)} out of 5</p>
            </div>
            <p className='my-3 mt-1 text-sm font-bold text-gray-700 text-center w-full'>Based on {itemData.review.length} review</p>
            <div className=' grid place-content-center gap-2'>
              {
                star.map((dat, index) => {
                  return <div className='flex items-center  gap-3' key={index}>
                  <div className='flex'>{range(dat)}</div>
                  {
                    basedRate(dat) > 0 ? <span className='bgYellow bg-yellow-400 h-3 min-w-24 flex-1 rounded-sm'></span> : <span className='bg-black bg-opacity-20 h-3 min-w-24 flex-1 rounded-sm'></span>
                  }
                  
                  <p className='text-black text-opacity-50 text-sm'>{basedRate(dat)}</p>
              </div>
                })
              }
              
            </div>
          </div>
          <div className='borderGrayT mt-5 pt-5'>
            <div className='flex items-center justify-between pb-6'>
              <div className='flex gap-1'>{range(itemData.review[0].star)}</div>
              <p className='text-gray-700 text-sm'>{itemData.review[0].review_date}</p>
            </div>
              <div className="flex items-center gap-3 mb-3 font-bold">
                <span className='bg-gray-950 bg-opacity-20 p-2 rounded-full '><Account size={20}/></span>
                <p className='text-sm'>{itemData.review[0].user}</p>
              </div>
              <p className='font-bold text-black text-opacity-60'>{itemData.review[0].title}</p>
              <p className='text-sm opacity-75'>{itemData.review[0].review}</p>
            </div>
          </div>
          </> : <p>loading</p>
        }
      </div>
    </MainLayout>
  )
}

export default Product
