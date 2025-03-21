import React, {useState, useEffect} from 'react'
import api from '../../js/api'
const FormDetail = ({editing, updated}) => {
  const [id, setId] = useState("")
  const [updating, setUpdating] = useState(false)
  const [update, setUpdate] = useState(true)
    const [personalDetails, setPersonalDetails] = useState({
      username: "",
      email: ""
    })
  const [formData, setFormData] = useState({
    phone_number: "",
    country: "",
    county: "",
    city: "",
    full_name: "_"
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    setUpdating(true)
    e.preventDefault();
    try {
      const res = await api.put(`/profile/${formData.id}/`, {...formData, full_name: "not added"})
      editing(false)
      updated(true)
      setUpdating(false)
    } catch(error) {
      console.warn(error.response.data)
      setUpdating(false)
    }
  }
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
                
                const res1 = await api.get('/info/', config)
                const userInfo = res1.data
                setPersonalDetails(userInfo)
               if (userInfo) {
                const res2 = await api.get(`/profile/${userInfo.id}/`, config)
                const prof = res2.data
                // console.log(prof)
                setId(prof.id)
                setFormData({
                  id: prof.id,
                  account_balance: prof.account_balance,
                  full_name: prof.full_name,
                  user: prof.user,
                  phone_number: prof.phone_number,
                  country: prof.country,
                  county: prof.county,
                  city: prof.city,
  
                })
    
               }
            } catch (error) {
                console.warn(error)
            }
            
    
    }
    }
    informa()
}, [])
const cancelSubmit = (e) => {
  e.preventDefault()
  editing(false)
  // setExist
}
  return (
    <form>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <span htmlFor='username' className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>username</span>
                    <span type='text' name='username' id="username" autoFocus className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 '>{personalDetails.username}</span>
                </div>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <span className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>email</span>
                    <span className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 ' >{personalDetails.email}</span>
                </div>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <label htmlFor='number' className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>phone number</label>
                    <input type='number' name='phone_number' id="phone number" className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 ' value={formData.phone_number} onChange={handleChange}/>
                </div>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <label htmlFor='emcountryail' className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>country</label>
                    <input type='text' name='country' id='country' className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 ' value={formData.country} onChange={handleChange}/>
                </div>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <label htmlFor='city' className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>county</label>
                    <input type='text' name='county' id="county" className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 ' value={formData.county} onChange={handleChange}
                    />
                </div>
                <div className=' grid grid-cols-6 borderGrayB'>
                    <label htmlFor='town' className='col-span-2 block capitalize borderGrayR p-3 font-bold text-gray-600'>city</label>
                    <input type='text' name='city' id="city" className='p-3 capitalize block text-gray-900 outline-none text-sm col-span-4 ' value={formData.city} onChange={handleChange}/>
                </div>
                <div className=''>
                  <button className={`bgBlue m-3 inline-block text-white font-bold text-sm p-2 rounded-sm capitalize hover:opacity-90 ${updating ? "opacity-60" : "opacity-100"}`} disabled={updating} onClick={handleSubmit}>{updating ? "Updating..." : "Update"}</button>
                 {
                  update ?  <button className={`bgRed m-3 inline-block text-white font-bold text-sm p-2 rounded-sm capitalize hover:opacity-90 ${updating ? "opacity-60" : "opacity-100"}`} disabled={updating} onClick={cancelSubmit}>Cancel</button> : null
                 }
                </div>
            </form>
  )
}

export default FormDetail
