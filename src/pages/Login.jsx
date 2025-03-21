import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import api from '../js/api'
const Login = ({isLoading, settingLoading}) => {
    const [errors, setError] = useState("")
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const handleSubmit= async (e) => {
        settingLoading(true)
        window.scrollTo({top:0, left:0, behavior:"smooth"})
        e.preventDefault();
        try{
            const response = await api.post("/login/", formData,)
            const data = await response.data
            settingLoading(false)
            localStorage.setItem("access_token", data.tokens.access)
            localStorage.setItem("refresh_token", data.tokens.refresh)
            navigate("/accounts")
        } catch(error) {
            settingLoading(false)
            if (error.response) {
            for (const dat in error.response.data) {
                setError(error.response.data[dat][0])
            }
        } else {
            console.warn(error)
        }
        }
    } 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
    })
    }
  return (
    <div className='min-w-full'>
        <p className='smMidText text-red-700 '>{errors}</p>
        <form onSubmit={handleSubmit}>
            <label  className="block text-sm my-2" htmlFor="email">Email</label>
            <input type="email"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='email' id='email' onChange={handleChange}/>
            <label  className="block text-sm my-2" htmlFor="password">Password</label>
            <input type="password"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='password' id='password' onChange={handleChange} />
            <p className='my-3 text-sm textSky font-bold hover:cursor-pointer'>Forgot your password?</p>
            <div>
            <button disabled={isLoading} className={`bgBlue block w-full p-2 rounded-sm text-white font-bold hover:opacity-85' type='submit ${isLoading ? "opacity-50": null}`}>sign in</button>
            </div>
        </form>
    </div>
  )
}

export default Login
