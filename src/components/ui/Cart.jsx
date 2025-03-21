import React, { useState, useEffect  } from 'react'
import { RxCross1 as Cross } from "react-icons/rx";
import { MdOutlineAdd as Add } from "react-icons/md";
import { FaMinus as Minus } from "react-icons/fa6";
import api from '../../js/api'
const Cart = ({showCart, settingCart, settingTotal,reload,  settingLength}) => {
    let [products,  setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState("")
    const [display, setDisplay] = useState(false)
    const [formData, setFormData] = useState({
        phone_number: "",
    })
    const [loader, setLoader] = useState(reload)
    const data = async () => {
        try {
            const res = await api.get(`/cart/?username=aga`)
            const datas = res.data
            setProducts(datas)
            setLoading(false)
        }catch(error) {
            console.log(error)
        }
        
    }
    // total
    let total = 0
    if (!loading) {
        settingLength(products.length)
        for (const product of products) {
            total += product.quantity * product.price
        }
        settingTotal(total)
    }
   
    // if (showCart) {
    //     setReload(true)
    // }
    useEffect(() => {
        const usernam = JSON.parse(localStorage.getItem('username'))
        setUsername(usernam)
        try {
            api.get(`/cart/?username=${usernam}`)
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
            
        }catch(error) {
            console.log(error)
        }
    }, [reload, showCart])

    const addItem = (item)=> {
        if(item.itemnumber > item.quantity) {
            item.quantity = item.quantity  + 1
            const dataz = {
                "image": item.image,
                "itemId": item.itemId,
                "itemnumber": item.itemnumber,
                "price": item.price,
                "quantity": item.quantity,
                "title": item.title,
                "username": username
            }
            api.put(`/cart/${item.id}/`, dataz)
            .then(res => {
                setLoader(new Date().getTime())
            })
            // window.location.reload()
        }
        // console.log(item)
        
    }
    const subtractItem = (item)=> {
        if(item.quantity > 0) {
            item.quantity = item.quantity  - 1
             // console.log(item)
        const dataz = {
            "image": item.image,
            "itemId": item.itemId,
            "itemnumber": item.itemnumber,
            "price": item.price,
            "quantity": item.quantity ,
            "title": item.title,
            "username": username
        }
        api.put(`/cart/${item.id}/`, dataz)
        .then(res => {
            setLoader(new Date().getTime())
        })
        }
        
    }
    const removeItem = (item)=> {
        api.delete(`/cart/${item.id}/`)
        .then(res => {
            // console.log(res.data)
            data()
        })
    }
     
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            
        })
        
    }
    const makePayment = async(e) => {
        e.preventDefault()
        // const userData = await authaticated()
        // sending order permission
        const data = {
            phone_number: formData.phone_number,
            amount: total,
            username: username
        }
        try {
            const res = await api.post('/payment/', data)
            console.log(res.data)
            if(res.data.success) {
                console.log("mpesa info sent witing for your consifmation")
            }else {
                console.log("process failed")
            }
        } catch(error) {
            console.log(error)
        }
    }
    const cancelPayment = (e) => {
        
        setDisplay(false)
    }

  return (
    <div className={`dist fixed top-0 right-0 sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 h-full bg-black bg-opacity-50 ${showCart ? "w-full" : "w-0"} transition-all duration-300 ease-linear z-50`}>
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
                        <p className='w-4/5 text-sm py-3 text-gray-600'>Make Mpesa payment of Ksh{total} to complete your order.</p>
                        <label htmlFor="number" className='text-sm block'>Phone number</label>
                        <input type="number" name='phone_number'  className='block bg-gray-950 w-full bg-opacity-10 my-2 p-2 border-none outline-none text-gray-600 placeholder-gray-500 text-sm' value={formData.phone_number} placeholder='eg: 07139111111' autoFocus={true} onChange={handleChange}/>
                       <div className='flex items-center gap-5 p-2'>
                        <button className='inline-block text-sm bg-green-700 p-2 px-3 rounded-md font-bold text-white hover:opacity-80' onClick={makePayment}>Pay</button>
                        <span className='inline-block text-sm bgRed p-2 px-3 rounded-md font-bold text-white hover:cursor-pointer hover:opacity-80' onClick={cancelPayment}>Cancel</span>
                       </div>
                    </form>
                </div>
                <div className='pb-2 flex-1 '>

                    {loading ? <p className='text-center text-gray-950'>No items in cart</p> : products.map((item, index)=> {
                        return <div key={index} className='grid grid-cols-8 gap-3 items-center mb-4'>
                            <figure className='col-span-2 p-1'>
                                <img className='block' src={require(item.image)} alt="" />
                            </figure>
                            <div className='col-span-4 px-2 fontNewTimes text-gray-950 text-opacity-90 tracking-wide'>
                                <p className=''>{item.title}</p>
                                <p className='my-2 textRed font-bold text-sm'>ksh.{item.price}</p>
                                <div className='flex items-center justify-start gap-2'>
                                    <span className='text-gray-900 bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={() => {
                                        subtractItem(item)
                                    }}>
                                        <Minus size={12}/>
                                    </span>
                                    <p>{item.quantity}</p>
                                    <span className='text-gray-900 font-extrabold bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={()=> {
                                        addItem(item)
                                    }}>
                                        <Add size={12}/>
                                    </span>
                                    <span className='text-gray-900 font-bold bg-gray-600 bg-opacity-20 p-2 rounded-full hover:cursor-pointer hover:opacity-50 transition-all duration-100 ease-linear' onClick={()=> {
                                        removeItem(item)
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
                    <p className='textRed text-md'>Ksh. {total}</p>
                </div>
                <p className='text-gray-950 opacity-70 fontNewTimes  text-sm tracking-wider mb-3  '>Taxes included, Discounts and shipping calculated at checkout</p>
                <div className='mx-2 my-3'>
                <button className={`block w-full bgRed  p-2 rounded-md m-auto text-white font-bold capitalize ${display ? "opacity-70": null}`} onClick={() => {
                    setDisplay(true)
                }} disabled={display | products.length == 0  ? true : false}>check out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
