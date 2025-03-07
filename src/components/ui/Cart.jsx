import React, { useState, useEffect  } from 'react'
import { RxCross1 as Cross } from "react-icons/rx";
import { MdOutlineAdd as Add } from "react-icons/md";
import { FaMinus as Minus } from "react-icons/fa6";
import axios from 'axios';
const Cart = ({showCart, settingCart, settingTotal, valu}) => {
     let cartItems = localStorage.getItem("cart")
    let data = []
    let total1 = 0
    const [total, setTotal] = useState(0)
    const [display, setDisplay] = useState(false)
    const [formData, setFormData] = useState({
        phone_number: "",
    })
    // calculate total cost
    const totalz = (itemz) => {
        let ttl = 0
        for (const tot of itemz) {
            ttl += ttl + (tot.price * tot.quantity)
        }
        setTotal(ttl)
        return ttl
    }
    // converting localstorage data to array on cart click
   if (valu) {
    let cartItem = localStorage.getItem("cart")
     data = JSON.parse(cartItem)
   }
   const settingData = () => {
    if (valu) {
        data = JSON.parse(cartItems)
      }
   }
    
    
    // totalz(JSON.parse(cartItems))
    const addItem = (id)=> {
        const cartItemsArray = JSON.parse(cartItems)
        for(const itm of cartItemsArray){
            if(itm.itemId == id) {
                if(itm.quantity < itm.itemnumber){
                    itm.quantity = itm.quantity + 1
                } else {
                    itm.quantity = 1
                }
            }
        }
        localStorage.setItem("cart", JSON.stringify(cartItemsArray))
        settingData()
        totalz(cartItemsArray)
    }
    const subtractItem = (id)=> {
        const cartItemsArray = JSON.parse(cartItems)
        for(const itm of cartItemsArray){
            if(itm.itemId == id) {
                if(itm.quantity > 1){
                    itm.quantity = itm.quantity - 1
                } else {
                    itm.quantity = itm.itemnumber
                }
            }
        }
        localStorage.setItem("cart", JSON.stringify(cartItemsArray))
        settingData()
        totalz(cartItemsArray)
    }
    const removeItem = (id)=> {
        const cartItemsArray = JSON.parse(cartItems)
        for(const itm of cartItemsArray){
            if(itm.itemId == id) {
                cartItemsArray.splice(cartItemsArray.indexOf(itm), 1)
            }
            
        }
        localStorage.setItem("cart", JSON.stringify(cartItemsArray))
        settingData()
        settingCart(false)
        // totalz(cartItemsArray)

    }
    
    
   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            
        })
        
    }
   const authaticated = async() => {
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
                    return userInfo
                } catch (error) {
                    navigate("/account/")
                }
            } else {
                navigate("/account/")
            }
   }
    const makePayment = async(e) => {
        e.preventDefault()
        const userData = await authaticated()
        // sending order permission
        const data = {
            phone_number: formData.phone_number,
            amount: total
        }
        const orderDat = JSON.parse(cartItems)
        let orderData = []
        for(const dat of orderDat) {
            orderData.push({
                title:dat.title,
                price: dat.price,
                item: dat.itemnumber,
                image_url: dat.image,
                status: "Pending",
                username: userData.username,
                productId: dat.itemId
            },)
        }
        for(const odre of orderData) {
            try{
                const res = await axios.post('http://localhost:8000/api/v1/order/',odre)
                localStorage.removeItem("cart")
                setData([])
            }catch(error) {
                console.log(error)
            }
        }
    setDisplay(false)
    }
    const cancelPayment = (e) => {
        
        setDisplay(false)
    }
    const total_1 = (itemz) => {
        let ttl = 0
        for (const tot of itemz) {
            ttl += ttl + (tot.price * tot.quantity)
        }
        total1 = ttl
        return total1
    }
    total_1(JSON.parse(cartItems))
    settingTotal(total1)
  return (
    <div className={`dist fixed top-0 right-0 sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 h-full bg-black bg-opacity-50 ${showCart ? "w-full" : "w-0"} transition-all duration-300 ease-linear z-30`}>
        <div className=' sm:col-span-3 sm:col-start-2 sm:col-end-5 md:col-start-3 md:col-end-7 bg-slate-50 p-3 h-full lg:col-start-5 lg:col-end-9 xl:col-start-7 xl:col-end-11 2xl:col-start-9 2xl:col-end-13 '>
            <div className='flex items-center justify-between py-2 mb-3'>
                <p className='text-lg text-gray-950'>Your Cart</p>
                <div  className='hover:cursor-pointer'>
                    <Cross className='hover:opacity-70 font-extrabold text-gray-950' size={22} onClick={() => {
                        showCart ? settingCart(false): settingCart(true)
                    }}/>
                </div>
            </div>
            <div className='flex items-center justify-between my-3 py-2 borderGrayB text-sm text-opacity-80 text-gray-950'>
                <p>product</p>
                <p>Total</p>
            </div>
            <div className='itemScroll relative'>
                <div className={`absolute bg-white p-3 ${display ? "block" : "hidden"}`}>
                    <form>
                        <p className='w-4/5 text-sm py-3 text-gray-600'>Make Mpesa payment of Ksh{total1} to complete your order.</p>
                        <label htmlFor="number" className='text-sm block'>Phone number</label>
                        <input type="number" name='phone_number'  className='block bg-gray-950 w-full bg-opacity-10 my-2 p-2 border-none outline-none text-gray-600 placeholder-gray-500 text-sm' value={formData.phone_number} placeholder='eg: 07139111111' autoFocus={true} onChange={handleChange}/>
                       <div className='flex items-center gap-5 p-2'>
                        <button className='inline-block text-sm bg-green-700 p-2 px-3 rounded-md font-bold text-white hover:opacity-80' onClick={makePayment}>Pay</button>
                        <span className='inline-block text-sm bgRed p-2 px-3 rounded-md font-bold text-white hover:cursor-pointer hover:opacity-80' onClick={cancelPayment}>Cancel</span>
                       </div>
                    </form>
                </div>
                <div className='pb-2 flex-1 '>
                    {data.map((item, index)=> {
                        return <div key={index} className='grid grid-cols-8 gap-3 items-center mb-4'>
                            <figure className='col-span-2 p-1'>
                                <img className='block' src={require(item.image)} alt="" />
                            </figure>
                            <div className='col-span-4 px-2 fontNewTimes text-gray-950 text-opacity-90 tracking-wide'>
                                <p className=''>{item.title}</p>
                                <p className='my-2 textRed font-bold text-sm'>ksh.{item.price}</p>
                                <div className='flex items-center justify-start gap-2'>
                                    <span className='text-gray-900 bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={() => {
                                        subtractItem(item.itemId)
                                    }}>
                                        <Minus size={12}/>
                                    </span>
                                    <p>{item.quantity}</p>
                                    <span className='text-gray-900 font-extrabold bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={()=> {
                                        addItem(item.itemId)
                                    }}>
                                        <Add size={12}/>
                                    </span>
                                    <span className='text-gray-900 font-bold bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={()=> {
                                        removeItem(item.itemId)
                                    }}>
                                        <Cross size={12}/>
                                    </span>
                                </div>
                            </div>
                            <p className='col-span-2 text-right fontNewTimes font-bold self-start textRed'>ksh.{item.quantity * item.price}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className='borderGrayT mt-5  bgWhitish py-1 rounded-md '>
                <div className='text-sm flex justify-between font-bold mb-2 capitalize'>
                    <p>Estimated Total</p>
                    <p className='textRed text-md'>Ksh. {total1}</p>
                </div>
                <p className='text-gray-950 opacity-70 fontNewTimes  text-sm tracking-wider mb-3  '>Taxes included, Discounts and shipping calculated at checkout</p>
                <div className='mx-2 my-3'>
                <button className={`block w-full bgRed  p-2 rounded-md m-auto text-white font-bold capitalize ${display ? "opacity-70": null}`} onClick={() => {
                    setDisplay(true)
                }} disabled={display ? true : false}>check out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
