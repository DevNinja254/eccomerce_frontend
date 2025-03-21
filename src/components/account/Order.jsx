import React, {useEffect, useState} from 'react'
import api from "../../js/api"
const Order = () => {
    const [review, setReview] = useState("hidden")
    const [inReview, setInReview] = useState(false)
    const [username, setUsername] = useState("")
    const [order, setOrder] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
       title: "",
       review: "",
        star: 0
    })
    
  useEffect(() => {
    const authaticated = async() => {
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
                setUsername(userInfo.username)
            } catch (error) {
                console.warn(error)
                navigate("/account/")
            }
        } else {
            navigate("/account/")
        }
    }
    authaticated()
    const orders = async() => {
        try{
            const response = await api.get(`/order/?username=${username}`)
            const data = response.data
            setOrder(data)
            setLoading(false)
        } catch(error) {
            console.warn(error)
        } 
    }
    orders()
  }, [])
  
  const handleChange = (e) => {
    e.preventDefault();
    // console.log([e.target.value])
    setFormData({
        ...formData,
        
        [e.target.name]: e.target.value
  })
  }
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const data = {
        title: formData.title,
        review: formData.review,
        star: formData.star,
        user: username,
        product: id == 0 ? 1 : id,
    }
    try{
        const res = await api.post('/reviews/' ,data)
        const revi = res.data
        console.log(revi)
        setFormData({
            title: "",
            review: "",
            star: 0
     
        })
        setSubmitted(true)
    }catch(error) {
        console.log(error)
    }
  }
  if(submitted) {
    setTimeout(() => {
        setSubmitted(false)
    }, 2500)
  }
  return (
    <div className=' -z-10'>
        <div className={` absolute top-3 right-5 bg-gray-100 text-sm shadow-md shadow-red-500 p-3 ${submitted ? "block": "hidden z-10"}`}>
            <p >Review send succesful.</p>
        </div>
        <div className='mx-3 my-6 borderGray p-3 rounded-md md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4 -z-30'>
        {loading ? <p>loading</p> : order.map((ord, index) => {
            return <div className='grid grid-cols-3 gap-3 my-4 mb-7 ' key={index}>
                <figure className='p-2'>
                    <img className='block w-full object-cover' src={require(ord.image_url)} alt="" />
                </figure>
                <div className='col-span-2'>
                    <p className='text-sm font-bold text-gray-600 tracking-wide '>Product: <span className='font-normal capitalize text-gray-900'>{ord.title}</span></p>
                    <p className='text-sm font-bold text-gray-600 tracking-wide'>Price: <span className=' capitalize textRed smMidText'>Ksh. {ord.price}</span></p>
                    <p className='text-sm font-bold text-gray-600 tracking-wide'>Item/s: <span className='capitalize text-gray-900 smMidText '>{ord.item}</span></p>
                    <p className='text-sm font-bold text-gray-600 tracking-wide'>status: <span className='p-1 capitalize textGreen smMidText'>{ord.status}</span></p>
                    <h3 className={`text-white font-bold w-fit smMidText p-1 rounded-md capitalize ${inReview && index == review ? "bg-yellow-700" : "bgBlue"} hover:cursor-pointer hover:opacity-90`} onClick={() => {
                        if(inReview) {
                            setReview("_")
                            setInReview(false)
                        } else {
                            setReview(index)
                            setInReview(true)
                        }
                            
                    }}>{inReview && index == review ? "cancel Review" : "write review "}</h3>
                </div>
                <form className={`col-span-3 mt-3 z-50 sticky ${review == index ? "block" : "hidden"}`} >
                            <input type="text" placeholder='Review title' name='title' value={formData.title} className='bg-gray-500 w-full rounded-md py-2 mb-2 px-1 bg-opacity-20 text-center text-sm outline-none text-gray-700'  autoFocus onChange={handleChange}/>
                            <label htmlFor="star">rate: </label>
                            <select className='bg-gray- rounded-md py-2 mb-2 px-1 bg-opacity-20 text-center text-sm outline-none text-gray-700' name="star" id="star"  onChange={handleChange}>
                                <option value={0} >0</option>
                                <option value={1} >1</option>
                                <option value={2} >2</option>
                                <option value={3} >3</option>
                                <option value={4} >4</option>
                                <option value={5} >5</option>
                            </select>
                            <textarea name="review" id="review" placeholder='review' value={formData.review} rows={5} className='bg-gray-500 w-full rounded-md py-2 mb-2 px-1 bg-opacity-20 text-sm outline-none text-gray-700' onChange={handleChange}></textarea>

                            <button className='bg-sky-600 smMidText p-1 text-white font-bold rounded-sm' onClick={(e) => {
                                window.scrollTo({top:0, left:0, behavior:"smooth"})
                                handleSubmit(e, ord.productId)
                                if(inReview) {
                                    setReview("_")
                                    setInReview(false)
                                } else {
                                    setReview(index)
                                    setInReview(true)
                                }
                            }}>submit</button>
                </form>
        </div>
        })}
        </div>
    </div>
  )
}

export default Order
