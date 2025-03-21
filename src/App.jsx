import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Product from './pages/Product'
import Products from './components/ui/Products'
import Contact from './pages/Contact'
import AllCart from "./components/ui/AllCart"
import Authetication from './pages/Authetication'
import Account from "./pages/Account"
import About from './pages/About'
import Search from './pages/Search'
import { useEffect, useState } from 'react'
import api from './js/api'
function App() {
  const [autheticate, setAutheticate] = useState(true)
  const [info, setInfo] = useState({})
  const [profile, setProfile] = useState({})
  // user information use Effect
  useEffect(() => {
    // document.title = "ShopFlora"
      const informa = async () => {
          const token = localStorage.getItem("access_token")
          if (token) {
              const config = {
                  headers: {
                      "Authorization" : `Bearer ${token}`,
                  }
              }
              try {
                  
                  const res1 = await api.get('/info/', config)
                  const userInfo = res1.data
                  setInfo(userInfo)
                 if (userInfo) {
                  const res2 = await api.get(`/profile/${userInfo.id}/`, config)
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
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:slug' element={<Product/>}></Route>
      <Route path='cartegory/:slug' element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path='/cartegory' element={<AllCart/>}></Route>
      <Route path='/account' element={<Authetication/>}></Route>
      <Route path='/accounts' element={<Account info={info} profile={profile} autheticate={autheticate}/>}></Route>
      <Route path='/about us' element={<About/>}></Route>
      <Route path='/search/' element={<Homepage/>}></Route>
      <Route path='/search/:slug' element={<Search/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
