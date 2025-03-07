import React, { useState } from 'react'
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import TabLinks from "../components/ui/TabLinks";
import Slidingnav from '../components/header/Slidingnav';
const MainLayout = ({children, hek}) => {
  // console.log(hek)
    const [slide, setSlide] = useState(false)
    const settingSlide = (set => {
      window.scrollTo({top:0, left:0, behavior: "smooth"})
      setSlide(set)
    })
    const [exist, setExist] = useState(false)
    const existFunc = (id) => {
      if (productCart) {
        const itemExist = JSON.parse(productCart)
        for (const editCart of itemExist) {
          if (editCart.itemId == id) {
            console.log("exist")
            setExist(true)
          } else {
            setExist(false)
          }
        }
    }}
  return (
    <>
        <Header slide={settingSlide} hek={hek} slideValue={slide}/>
        <div className='relative'>
        <Slidingnav slide={settingSlide} slideValue={slide}/>
        </div>
        {children}
        <Footer/>
        <TabLinks/>
    </>
  )
}

export default MainLayout
