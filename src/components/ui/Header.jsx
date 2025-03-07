import React from 'react'
import Navsmall from '../header/Navsmall'
import { BiSlider } from 'react-icons/bi'
import About from '../header/About'
import MoreLinks from '../header/MoreLinks'
import Cart from './Cart'

const Header = ({slide, slideValue, hek}) => {
  return (
    <header className="shadow-md shadow-gray-200 mb-3 sticky top-0 left-0 bg-gray-50 z-10">
      <p className='py-2 px-2 bgBlue text-gray-100 text-sm tracking-wide text-center font-sans'>We deliver high quality product at low price and wuick delivery.</p>
      <About/>
      <div className='xl:w-4/5 lg:m-auto '>
        <Navsmall slide={slide} hek={hek} slideValue={slideValue}/>
        <MoreLinks/>
      </div>
    </header>
  )
}

export default Header
