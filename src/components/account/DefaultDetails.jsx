import React, {useEffect, useState} from 'react'
import axios from 'axios'
const DefaultDetails = ({editing}) => {
  const [personalDetails, setPersonalDetails] = useState({
    username: "",
    email: ""
  })
  const [moreInfo, setMoreInfo] = useState({
    phone_number: "",
  })
  useEffect(() => {
    document.title="Account"
    window.scrollTo({top:0, left:0, behavior:"smooth"})
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
                setPersonalDetails(userInfo)
               if (userInfo) {
                const res2 = await axios.get(`http://localhost:8000/api/v1/profile/${userInfo.id}/`, config)
                const prof = res2.data
                setMoreInfo(prof)
    
               }
            } catch (error) {
                console.warn(error)
            }
            
    
    }
    }
    informa()
}, [])
  return (
    <div>
          <div className=' grid grid-cols-6 borderGrayB'>
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>username</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>{personalDetails.username}</p>
          </div>
          <div className=' grid grid-cols-6 borderGrayB'>
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>email</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>{personalDetails.email}</p>
          </div>
          <div className=' grid grid-cols-6 borderGrayB'  >
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>Phone number</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>+254{moreInfo.phone_number}</p>
          </div>
          <div className=' grid grid-cols-6 borderGrayB'>
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>country</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>{moreInfo.country}</p>
          </div>
          <div className=' grid grid-cols-6 borderGrayB'>
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>county</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>{moreInfo.county}</p>
          </div>
          <div className=' grid grid-cols-6'>
              <p className='col-span-2 capitalize borderGrayR p-3 font-bold text-gray-600'>city</p>
              <p className='p-3 capitalize text-gray-900 text-sm col-span-4'>{moreInfo.city}</p>
          </div>
          <span className='bgGray text-gray-900 m-3 inline-block font-bold text-sm p-2 px-4 hover:opacity-90 hover:cursor-pointer rounded-sm capitalize' onClick={() => {
            editing(true)
          }}>edit</span>
        </div>
  )
}

export default DefaultDetails
