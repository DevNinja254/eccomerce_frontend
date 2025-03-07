import React, {useEffect, useState} from 'react'
import { BiMenu as Menu } from 'react-icons/bi'
import { BiCart  as Carti } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { GoPerson as Person} from "react-icons/go";
import { IoSearch as Search } from 'react-icons/io5';
import Cart from '../ui/Cart';
const Navsmall = ({slide, slideValue, hek}) => {
  const [showCart, setShowCart] = useState(false)
  const [cartExist, setCartExist] = useState(false)
  let cartLength= 0
  const [valu, setValu] = useState(false)
  const [total1, setTotal1] = useState(0)
  const settingCart = (value) => {
    setShowCart(value)
  }
  // fetch cart from local 
    const carts = localStorage.getItem("cart")
    if (carts) {
      cartLength = JSON.parse(carts).length
     
    }
    const items = () => {
      console.log(carts)
      setValu(true)
      if (carts) {
        setCartExist(true)
      }
    }
    const settingTotal = (value) => {
      setTotal1(value)
    }
  return (
    <div>
      <div className='flex items-center justify-between px-2 py-3'>
        <div className='sm:flex items-center justify-start gap-4'>
          <Menu className='text-gray-700 lg:hidden' onClick={()=> {
            slideValue ? slide(false):slide(true)
          }} size={30}/>
          <div className='hidden sm:block mr-4'>
            <NavLink to="/" className='textBlue font-bold text-xl flex items-center'>
              <img src={require("../../assets/images/bag_40x40.png")}  alt="" />
              <span>Flora</span>  
            </NavLink>
            <p className='smMidText text-black text-opacity-50 whitespace-nowrap'>Online Shopping Center</p>
          </div>
        </div>
        <NavLink to="#" className='sm:hidden textBlue font-bold text-2xl'>Flora</NavLink>
        <div className='flex items-center justify-end gap-4 w-full'>
          <form className='bg-gray-500 bg-opacity-20 rounded-md overflow-hidden p-2 sm:flex items-center hidden w-full'>
            <input className='outline-none text-gray-600 bg-transparent p-1 text-sm flex-1 ' type="text" name='search' placeholder='Search for product, elctronic...' />
            <button className='p-1 text-gray-600'><Search size={22}/></button>
          </form>
          <NavLink to="/accounts" className='p-1 borderGray rounded-full hover:cursor-pointer hover:opacity-60 transition all duration-150 ease-linear hidden sm:block'>
            <Person size={22}/>
          </NavLink>
          <p className='text-sm text-gray-700 text-opacity-80'>Ksh.{total1}</p>
          <div className='relative hover:cursor-pointer hover:opacity-80' onClick={() => {
                showCart ? settingCart(false) : settingCart(true)
                items()
              }}>
              <Carti size={30}/>
              <p className='smText absolute font-extrabold -top-1 right-0 bgRed text-white rounded-full px-1'>{cartLength}</p>
          </div>
        </div>
      </div>
      <Cart showCart={showCart} settingCart={settingCart} cartExist={cartExist}  valu={valu} settingTotal={settingTotal}/>
    </div>
  )
}

export default Navsmall
