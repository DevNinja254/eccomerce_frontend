import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Product from './pages/Product'
import Products from './components/ui/Products'
import Contact from './pages/Contact'
import AllCart from "./components/ui/AllCart"
import Authetication from './pages/Authetication'
import Account from "./pages/Account"
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [autheticate, setAutheticate] = useState(true)
  const [info, setInfo] = useState({})
  const [profile, setProfile] = useState({})
  const [cart, setCart] = useState([])
  const productCart = localStorage.getItem("cart")

  const settingCart = (value) => {
    // console.log("updated")
    setCart(value)
  }
  
  // product cart useEffect
  useEffect(() => {
    setCart(JSON.parse(productCart))
  },[])
  // user information use Effect
  useEffect(() => {
      const informa = async () => {
          const token = localStorage.getItem("access_token")
          if (token) {
              const config = {
                  headers: {
                      "Authorization" : `Bearer ${token}`,
                  }
              }
              try {
                  
                  const res1 = await axios.get('http://localhost:8000/api/v1/info/', config)
                  const userInfo = res1.data
                  setInfo(userInfo)
                 if (userInfo) {
                  const res2 = await axios.get(`http://localhost:8000/api/v1/profile/${userInfo.id}/`, config)
                  const prof = res2.data
                  setProfile(prof)
                  setAutheticate(true)
      
                 }
              } catch (error) {
                  console.warn(error)
              }
        }
      }
      informa()
  }, [])


  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route index element={<Homepage/>}></Route>
      <Route path='/products' element={<Products productCart={productCart} settingCart={settingCart}/>}/>
      <Route path='/products/:slug' element={<Product  settingCart={settingCart}  />}></Route>
      <Route path='cartegory/:slug' element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/cartegory' element={<AllCart/>}></Route>
      <Route path='/account' element={<Authetication/>}></Route>
      <Route path='/accounts' element={<Account info={info} profile={profile} autheticate={autheticate}/>}></Route>
      <Route path='/about us' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
