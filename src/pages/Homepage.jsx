import React, { useEffect } from 'react'
import Main from "../components/Main";
import MainLayout from '../layout/MainLayout';
const Homepage = ({settingSharedData}) => {
  // document.title = "ShopFlora" 
  useEffect(()=>{
    window.scrollTo({top:0, left:0, behavior:"auto"})
  })
  return ( 
      <MainLayout>
      <Main/>
      </MainLayout>
  )
}

export default Homepage
