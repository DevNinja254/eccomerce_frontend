import React, { useState } from 'react'
import { RxCross1 as Cross } from "react-icons/rx";
import { MdOutlineAdd as Add } from "react-icons/md";
import { FaMinus as Minus } from "react-icons/fa6";
const Deposit = ({showDeposit, settingDeposit}) => {
    const num = [1,1, 1, 1,1]   
    const addItem = ()=> {
        console.log("item added")
    }
    const subtractItem = ()=> {
        console.log("item subtracted")
    }
    const removeItem = ()=> {
        console.log("item removed")
    }
    const checkOut = ()=> {
        console.log("item checked out")
    } 
  return (
    <div className={`dist fixed top-0 right-0 sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 bg-black bg-opacity-30 h-full ${showDeposit ? "w-full" : "w-0"} transition-all duration-200 ease-linear z-30`}>
        <div className=' sm:col-span-3 sm:col-start-2 sm:col-end-5 md:col-start-3 md:col-end-7 bg-slate-100 p-3 h-full lg:col-start-5 lg:col-end-9 xl:col-start-7 xl:col-end-11 2xl:col-start-9 2xl:col-end-13 sm:mx-auto'>
            <div className='sm:w-5/6 sm:mx-auto'>
                <div className='flex items-center justify-between  my-3 pb-3'>
                    <p className='text-lg'>M-pesa Payment</p>
                    <Cross className='hover:cursor-pointer' size={25} onClick={settingDeposit}/>
                </div>
                <div>
                    <p className='capitalize borderGrayT py-3 font-bold '>instructions</p>
                    <div className='text-sm borderGrayB pb-3'>
                        <p className='my-1'>Enter amount you want to deposit in your account in KES eg.<span className='textRed'> 2000</span></p>
                        <p className='my-1'>Input your safaricom line number in which you want to deposit money from.  eg. <span className='textRed'>0712345678</span>.</p>
                        <p className='my-1'>Click on deposit.</p>
                        <p className='my-1'>Check on your phone for Mpesa Pin prompt to complete the transaction.</p>
                        <p className='my-1'>Once completed account balance will be updated ASAP.</p>
                    </div>
                </div>
                <form action="" className=''>
                    <label className='block my-2 font-mono capitalize tracking-wide text-gray-700' htmlFor="amount">Amount</label>
                    <input className=' rounded-sm block w-full outline-none bg-gray-500 bg-opacity-10 p-2 text-sm' type="number" autoFocus name='amount' id="amount"/>
                    <label className='block my-2 font-mono capitalize tracking-wide text-gray-700' htmlFor="phone number">phone number</label>
                    <input className='rounded-sm block w-full outline-none bg-gray-500 bg-opacity-10 p-2 text-sm' type="number" name='phone number' id="phone number"/>
                    <button className='inline-block my-3 bg-green-700 text-white font-bold text-sm p-2 rounded-md hover:opacity-90'>Deposit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Deposit
