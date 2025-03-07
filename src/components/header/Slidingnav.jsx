import React, { useState } from 'react'
import { RxCross1 as Cross } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { MdTrendingUp as Trend } from 'react-icons/md'
import { IoIosArrowDown as ArrowD } from "react-icons/io";
import { IoIosArrowUp as ArrowU} from "react-icons/io";
import { BiSolidOffer as Offer } from 'react-icons/bi'
import { GrNew as New } from 'react-icons/gr'
const Slidingnav = ({slide, slideValue}) => {
    const [lang, setLang] = useState(false)
    const [currency, setCurrency] = useState(false)
    const [language, setLanguage] = useState("English")
    const [currence, setCurrence] = useState("Ksh")
    const settingCurr = (curr) => {
        setCurrence(curr)
    }
    const settingLang = (lan) => {
        setLanguage(lan)
    }
    return (
        <div>
            <div className={`absolute top-0 left-0 ${slideValue ? "block w-full": "w-0 hidden"} z-10 min-h-screen bg-gray-50 py-3 transition-all duration-500 ease-linear`}>
                <div className='px-4 flex items-start justify-between py-2 mb-3 border-b-gray-500 border-2 border-opacity-15'>
                    <div className='grid gap-3'>
                        <h3 className='textBlue font-bold text-lg'>Floshop</h3>
                        <p className='text-sm text-black text-opacity-50'>Site Navigation</p>
                    </div>
                    <div className='text-white bg-black bg-opacity-50 p-1 rounded-full text-opacity-90'>
                        <Cross className='' onClick={() => {
                            slideValue ? slide(false):slide(true)
                        }}/>
                    </div>
                </div>
                <NavLink className="block px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm" to="#">Home</NavLink>
                <NavLink className="block px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm" to="/products">Shop</NavLink>
                <NavLink className="block px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm" to="/about us">About Us</NavLink>
                <NavLink to="/cartegory/trending" className="flex px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 items-center justify-start gap-4 text-sm">
                    <Trend size={20}/>
                    <p>Trending</p>
                </NavLink>
                <NavLink className="flex px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 items-center justify-start gap-4 text-sm" to="/cartegory/offers">
                    <Offer size={20}/>
                    <p>Offers</p>
                </NavLink>
                <NavLink className="flex px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 items-center justify-start gap-4 text-sm" to="/cartegory/new">
                    <New size={20}/>
                    <p>New</p>
                </NavLink>
                <NavLink className="block px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm" to="/blog">Blog</NavLink>
                <NavLink className="block px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm" to="/contact">Contact</NavLink>
                <div className="block px-4 pb-2 mb-3  text-gray-700 text-sm text-opacity-70 border-b-gray-500 border-b-2 border-opacity-15 ">
                    <p>Copyright &copy; 2025 Flora shopify Site. All rights reserved. <br/>Powered by info.imbaq@gmail.com</p>
                </div>
                <div className="px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm">
                    <div  className="flex items-center justify-between w-4/5">
                        <h3>{language}</h3>
                        {lang ? <ArrowU className='text-black text-opacity-50' onClick={()=> {
                            setLang(false)
                        }} size={23}/> : <ArrowD className='text-black text-opacity-50' onClick={()=> {
                            setLang(true)
                        }} size={23}/>}
                        
                        
                    </div>
                    {lang ? 
                        <div className='grid capitalize gap-2 place-content-start mt-3 smMidText text-gray-900 text-opacity-70 pl-2'>
                            <button onClick={()=> {
                                settingLang("English")
                            }} className='uppercase block'>English</button>
                            <button onClick={()=> {
                                settingLang("Spanish")
                            }} className='uppercase block'>Spanish</button>
                            <button onClick={()=> {
                                settingLang("Germany")
                            }} className='uppercase block'>Germany</button>
                        </div> : null   
                    }
                </div>
                <div  className="px-4 pb-2 mb-3 font-bold text-gray-700 border-b-gray-500 border-b-2 border-opacity-15 text-sm">
                    <div className="flex items-center justify-between w-4/5 uppercase">
                        <h3>{currence}</h3>
                        {currency ? <ArrowU className='text-black text-opacity-50' onClick={()=> {
                            setCurrency(false)
                        }} size={23}/> : <ArrowD className='text-black text-opacity-50' onClick={()=> {
                            setCurrency(true)
                        }} size={23}/>}
                        
                        
                    </div>
                {currency ? 
                        <div className='grid gap-2 place-content-start mt-3 smMidText text-gray-900 text-opacity-70 pl-2  uppercase'>
                            <button onClick={()=> {
                                setCurrence("ksh")
                            }} className='uppercase block'>KsH</button>
                            <button onClick={()=> {
                                setCurrence("usd")
                            }} className='uppercase block'>USD</button>
                            <button onClick={()=> {
                                setCurrence("gBp")
                            }} className='uppercase block'>GBP</button>
                        </div> : null
                    }
                </div>
            </div>
        </div>

  )
}

export default Slidingnav
