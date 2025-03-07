import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import EaseNav from '../components/ui/EaseNav'
import { BiMenu as Menu } from 'react-icons/bi'
import Order from '../components/account/Order'
import Details from '../components/account/Details'
import Deposit from '../components/account/Deposit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Account = ({info, profile, autheticate}) => {
    const [deposit, setDeposit] = useState(false)
    const [bg, setBg] = useState("")
    const [show, setShow] = useState("hidden")
    const [accountDetail, setAccountDetail] = useState(<Details info={info} profile={profile} />)
    const settingDeposit = () => {
        deposit ? setDeposit(false) : setDeposit(true)
        
    }
    const navigate = useNavigate()
    useEffect(() => {
        document.title="Account"
        window.scrollTo({top:0, left:0, behavior:"smooth"})
        console.log(autheticate)
        if (autheticate) {
            console.log(info, profile)
        } else {
            navigate("/account/")
        }
    }, [])
    
    
  return (
    <MainLayout>
        <Deposit showDeposit={deposit} settingDeposit={settingDeposit} />
        <EaseNav/>
        <div className='w-11/12 lg:w-5/6 mx-auto my-6 fontNewTimes'>
            <div className='mx-3 my-3 sm:flex items-center justify-between'>
                <div>
                    <p className='text-md font-bold text-gray-600'>Account Balance: <span className='text-lg text-gray-700'>Ksh. {profile["account_balance"]}</span></p>
                </div>
                <span className='my-3 bg-slate-300 text-sm py-1 rounded-md px-2 capitalize hover:cursor-pointer' onClick={settingDeposit}>deposit</span>
            </div>
            <div className='mx-3 tracking-wider borderGray rounded-md'>
                <div className='flex items-center justify-start gap-4 font-bold text-gray-700 bg-gray-400 bg-opacity-20 p-2 hover:cursor-pointer hover:opacity-90' onClick={() => {
                    show == "hidden" ? setShow("block") : setShow("hidden")
                }}>
                    <Menu size={27}/>
                    <p>Navigation</p>
                </div>
                <div className={`${show}`}>
                    <div className={`font-bold text-gray-800 uppercase text-sm tracking-normal p-3 ${bg == "history" ? "bgBlue text-white": "borderGrayB"} hover:opacity-90  hover:cursor-pointer  transition-all duration-150 ease-linear`} onClick={() => {
                        setBg("history")
                        setAccountDetail(<Order />)
                    }}>
                        <p>order HISTORY</p>
                    </div>
                    <div className={`font-bold text-gray-800 uppercase text-sm tracking-normal p-3 ${bg == "details" ? "bgBlue text-white": "borderGrayB"}  hover:cursor-pointer hover:opacity-90 transition-all duration-150 ease-linear`} onClick={() => {
                        setBg("details")
                        setAccountDetail(<Details info={info} profile={profile} />)
                    }}>
                        <p>view details</p>
                    </div>
                    <div className={`font-bold text-gray-800 uppercase text-sm tracking-normal p-3 ${bg == "logout" ? "bgBlue text-white": ""} hover:opacity-90 hover:cursor-pointer transition-all duration-150 ease-linear`} onClick={() => {
                        setBg("logout")
                        setAccountDetail("")
                    }}>
                        <p>log out</p>
                    </div>
                </div>
            </div>
            {accountDetail}
            <div>

            </div>
        </div>
    </MainLayout>
  )
}

export default Account
