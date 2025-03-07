import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiSecurePaymentLine as Verify} from "react-icons/ri";
import { MdKeyboardArrowUp as ArrowU} from "react-icons/md";
import { MdKeyboardArrowDown as ArrowD} from "react-icons/md";
const About = () => {
    const [lang, setLang] = useState("English")
    const [langHover, setLangHover] = useState(false)
    const settingLang = (sett) => {
        setLang(sett)
    }
    const [currency, setCurrency] = useState("KSH")
    const [currHover, setCurrHover] = useState(false)
    const settingCurr = (sett) => {
        setCurrency(sett)
    }
  return (
    <div className='border-b-gray-500 border-b-2 border-opacity-15'>
        <div className='p-3 py-4 hidden lg:flex justify-between text-sm text-gray-900 items-center xl:w-4/5 lg:m-auto'>
        <nav className='flex item-center gap-3 text-sm tracking-tighter text-gray-600 '>
            <NavLink to="/about us">About Us</NavLink>
            <NavLink to="/compare">Compare</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
        </nav>
        <div className='flex items-center justify-end gap-3'>
            <div className='flex items-center  gap-2'>
                <Verify className='text-gray-600' size={20}/>
                <p>100% Secure delivery without contacting the courier</p>
            </div>
            <p>Need help? Call US: <span className='textSky font-bold'>+2547 239 000</span></p>
            <div className='flex items-center justify-end gap-2'>
                <div className='relative hover:cursor-pointer' onMouseEnter={()=> {
                    setLangHover(true)
                }} onMouseLeave={()=> {
                    setLangHover(false)
                }}>
                    <div className='flex items-center gap-1'>
                        <p>{lang}</p>
                        {langHover ? <ArrowU/> : <ArrowD/>}
                    </div>
                    <div className={`absolute top-full left-0 bg-gray-100 p-2 z-20 rounded-md text-gray-600 gap-2 ${langHover ? "grid" : "hidden"}`}>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            settingLang("English")
                        }}>English</p>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            settingLang("Germany")
                        }}>Germany</p>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            settingLang("Spanish")
                        }}>Spanish</p>
                        
                    </div>
                </div>
                <div className='relative hover:cursor-pointer' onMouseEnter={()=> {
                    setCurrHover(true)
                }} onMouseLeave={()=> {
                    setCurrHover(false)
                }}>
                <div className='flex items-center gap-1 px-1'>
                        <p>{currency}</p>
                        {currHover ? <ArrowU/> : <ArrowD/>}
                    </div>
                    <div  className={`absolute top-full left-0 bg-gray-100 p-2 z-20 rounded-md text-gray-600 gap-2 w-full ${currHover ? "grid" : "hidden"}`}>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            setCurrency("USD")
                        }}>USD</p>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            setCurrency("KSH")
                        }}>KSH</p>
                        <p className='hover:cursor-pointer hover:opacity-60 transition-all duration-150 ease-in' onClick={()=> {
                            setCurrency("GBP")
                        }}>GBP</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
