import React, { useEffect, useState } from 'react'
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import TabLinks from "../components/ui/TabLinks";
import Slidingnav from '../components/header/Slidingnav';
const MainLayout = ({children, title=null}) => {
    const [slide, setSlide] = useState(false)
    const settingSlide = (set => {
      window.scrollTo({top:0, left:0, behavior: "smooth"})
      setSlide(set)
    })
  return (
    <>
      <Header slide={settingSlide} slideValue={slide} title={title}/>
      <div className='relative'>
      <Slidingnav slide={settingSlide} slideValue={slide}/>
      </div>
      <div>{children}</div>
      <Footer/>
      <TabLinks/>
    </>
  )
}

export default MainLayout
