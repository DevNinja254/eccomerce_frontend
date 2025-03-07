import React, { useState, useEffect, useRef } from 'react'
import { BiMenu as Menu } from 'react-icons/bi'
import { MdKeyboardArrowDown as ArrowD} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const MoreLinks = () => {
    const [list, setList] = useState(false)
    const cart = [1,1,1,1,1,1,1,1,1,1]
    let menuRef = useRef()
    // useEffect(()=>{
    //     const handler = (e) => {
    //         // if(menuRef.current.contains(e.target)) {
    //             setList(false)
    //         // }
            
    //     }
    //     document.addEventListener("mousedown",handler)
    // })
  return (
    <div>
        <div className='lg:flex hidden justify-between px-3'>
            <div className='flex items-center justify-end gap-2 bgSky my-3 p-2 rounded-full text-white font-bold text-sm relative hover:cursor-pointer' onClick={()=> {
                list ? setList(false):setList(true)
            }} onBlur={() => {
                list == true ? setList(false): null
            }}>
                <Menu/>
                <p>ALL CATEGORIES</p>
                <ArrowD size={16}/>
                <div className={`absolute top-full left-0 z-30 text-sm w-full bg-gray-50 text-gray-500  p-4 borderGray rounded-md ${list ? "block" : "hidden"}`} ref={menuRef}>
                    {cart.map((_, index) => {
                        return <NavLink className="block py-1 hover:opacity-70 " to={`/cartegory/cart ${index}`}>Cartegory{index}</NavLink>
                    })}
                </div>
            </div>
            <nav className='flex items-center justify-end gap-3 text-gray-900 text-sm'>
                <NavLink className="skyHover p-1 rounded-full" to="/">Home</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/products">Shop</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/cartegory/trending">Trending</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/cartegory/offers">Offers</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/cartegory/new">New</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/blog">Blog</NavLink>
                <NavLink className="skyHover p-1 rounded-full" to="/contact">Contact</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default MoreLinks
