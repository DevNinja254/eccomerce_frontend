import React, {useState} from 'react'
import { BiStore as Store } from 'react-icons/bi'
import { BiSearch as Search } from 'react-icons/bi'
import { GiLoveHowl as Love } from 'react-icons/gi'
import { VscAccount as Account } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { RxCross1 as Cross } from "react-icons/rx";
import { IoSearch as Searc } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'
import { AiOutlineProduct as Cartegory } from "react-icons/ai";
const TabLinks = () => {const [search, setSearch] = useState("")
  const [display, setDisplay] = useState(false)
  const navigate = useNavigate()
  const displaySet =() => {
    display ? setDisplay(false) : setDisplay(true)
  }
  const handleClick = () => {
    setDisplay(false)
    navigate(`/search/${search}`)
  }
  return (
    <>
    <div className={`fixed top-0 left-0 w-full z-50 bg-white h bg-gray-100 p-3 ${display ? "block" : "hidden"}`}>
        <div className='flex w-full flex-center justify-start gap-7'>
          <div className='bg-black bg-opacity-30 flex w-full gap-3 text-white rounded-md'>
            <input type="text" name='search' value={search} className='w-full bg-transparent text-gray-800 p-1 outline-none border-none' autoFocus={true} onChange={(e) => {
              setSearch(e.target.value)
            }} />
            <button className='p-2' onClick={handleClick}><Searc size={27}/></button>
          </div>
          <div className='p-2 text-white bg-black bg-opacity-30 rounded-full' onClick={displaySet}><Cross size={26}/></div>
        </div>
        
      </div>
    <div className='sticky bottom-0 left-0 flex justify-evenly bg-gray-50 p-2 shadow-md shadow-gray-900 text-opacity-50 text-black sm:hidden'>
      <NavLink to="/products" className='flex flex-col items-center'>
        <Store size={20}/>
        <p className='smMidText'>Store</p>
      </NavLink>
      <div to="/search" className='flex flex-col items-center hover:cursor-pointer' onClick={displaySet}>
        <Search size={20}/>
        <p className='smMidText'>Search</p>
      </div>
      <NavLink  to="/cartegory" className='flex flex-col items-center'>
        <Cartegory size={20}/>
        <p className='smMidText'>Cartegory</p>
      </NavLink>
      <NavLink  to="/accounts" className='flex flex-col items-center'>
        <Account size={20}/>
        <p className='smMidText'>Account</p>
      </NavLink>
    </div>
    </>
  )
}

export default TabLinks
