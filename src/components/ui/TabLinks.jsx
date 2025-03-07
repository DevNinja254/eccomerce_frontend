import React from 'react'
import { BiStore as Store } from 'react-icons/bi'
import { BiSearch as Search } from 'react-icons/bi'
import { GiLoveHowl as Love } from 'react-icons/gi'
import { VscAccount as Account } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
const TabLinks = () => {
  return (
    <div className='sticky bottom-0 left-0 flex justify-evenly bg-gray-50 p-2 shadow-md shadow-gray-900 text-opacity-50 text-black sm:hidden'>
      <NavLink to="/products" className='flex flex-col items-center'>
        <Store size={20}/>
        <p className='smMidText'>Store</p>
      </NavLink>
      <NavLink to="/search" className='flex flex-col items-center'>
        <Search size={20}/>
        <p className='smMidText'>Search</p>
      </NavLink>
      <NavLink  to="/wishlist" className='flex flex-col items-center'>
        <Love size={20}/>
        <p className='smMidText'>Wishlist</p>
      </NavLink>
      <NavLink  to="/accounts" className='flex flex-col items-center'>
        <Account size={20}/>
        <p className='smMidText'>Account</p>
      </NavLink>
    </div>
  )
}

export default TabLinks
