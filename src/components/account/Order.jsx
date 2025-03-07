import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Order = () => {
    const [review, setReview] = useState("hidden")
    const [inReview, setInReview] = useState(false)
    const [username, setUsername] = useState("")
    const [order, setOrder] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
       title: "",
       review: "",

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
                
                const res1 = await axios.get('http://localhost:8000/api/v1/info/', config)
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
            const response = await axios.get(`http://localhost:8000/api/v1/order/?username=${username}`)
            const data = response.data
            setOrder(data.results)
            console.log(data.results)
        } catch(error) {
            console.warn(error)
        } 
    }
    orders()
  }, [])
  
  const handleChange = (e) => {
    e.preventDefault();
    console.log([e.target.value])
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
        star: 4,
        user: username,
        product: id == 0 ? 1 : id,
    }
    try{
        const res = await axios.post('http://localhost:8000/api/v1/reviews/' ,data)
        const revi = res.data
        setFormData({
            title: "",
            review: "",
     
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
    <div className='relative'>
        <div className={`absolute top-3 right-5 bg-gray-100 text-sm shadow-md shadow-red-500 p-3 ${submitted ? "block": "hidden"}`}>
            <p >Review send succesful.</p>
        </div>
        <div className='mx-3 my-6 borderGray p-3 rounded-md md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 xl:grid-cols-4'>
        {order.map((ord, index) => {
            return <div className='grid grid-cols-3 gap-3 my-4 mb-7' key={index}>
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
                <form className={`col-span-3 mt-3 ${review == index ? "block" : "hidden"}`} >
                            <input type="text" placeholder='Review title' name='title' value={formData.title} className='bg-gray-500 w-full rounded-md py-2 mb-2 px-1 bg-opacity-20 text-center text-sm outline-none text-gray-700'  autoFocus onChange={handleChange}/>
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
