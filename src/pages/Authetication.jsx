import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import EaseNav from '../components/ui/EaseNav'
import Login from './Login'
import Register from './Register'
import { NavLink } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { BarLoader as Spinner } from 'react-spinners'


const Authetication = () => {
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    const [autheticated, setAutheticated] = useState(false)
    const [account, setAccount] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const settingLoading = (value) => {
      setIsLoading(value)
    }
    const settingAutheticated = (value) => {
      setAutheticated(value)
        setAccount(true)
        setLogin(true)
    }
    useEffect(()=> {
        window.scrollTo({top:0, left:0, behavior:"instant"})
    }, [])
  return (
    <MainLayout>
        <EaseNav/>
        <div className='autheticate' id='spinner' style={{
          "border": "0",
        }}>
          <Spinner
          color="rgba(0,0,0,0.3)"
          loading={isLoading}
          cssOverride={{
            "width": "100%",
            "backgroundColor": "white"
          }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
          <div className='m-6 py-2 autheticate'>
          {
          account ? <p className='text-center my-5 text-sm text-green-700 grid place-content-center'><span className='bg-red-400  w-fit p-3 px-4 bg-opacity-15 tracking-wider'>Account created successfull</span></p>: null
        }
            <div className={`flex items-center justify-center gap-3 capitalize text-gray-950 font-bold fontNewTimes tracking-wider`}>
                <p onClick={() => {
                    setLogin(true)
                    setRegister(false)
                }} className={`hover:cursor-pointer ${login ? "opacity-100" : "opacity-50"}`}>login</p>
                <p onClick={() => {
                    setRegister(true)
                    setLogin(false)
                }} className={`${register ? "opacity-100" : "opacity-50"} hover:cursor-pointer ${account ? "hidden" : null}`}>Register</p>
            </div>
            <div className='overflow-hidden'>
                <div className={`flex ${login ? "-translate-x-0": "-translate-x-full"} transition-all duration-200 ease-linear`}>
                    {/* login */}
                    <Login settingAutheticated ={settingAutheticated} settingLoading ={settingLoading} isLoading={isLoading}/>
                    {/* register */}
                    <Register settingLoading ={settingLoading} isLoading={isLoading} settingAutheticated ={settingAutheticated}/>
                </div>
            </div>
          </div>
        
    </MainLayout>
  )
}

export default Authetication
