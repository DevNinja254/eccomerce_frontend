import api from '../js/api'
import React, {useState} from 'react'

const Register = ({settingAutheticated, isLoading, settingLoading}) => {
    const [errors, setError] = useState()
    const [pwdMatch, setPwdMatch] = useState()
    const [change, setChange] = useState(false)
    const [formData, setFormData] = useState({
        "username": "",
        "email":"",
        "password1":"",
        "password2":"",
    }) 
    const handleSubmit=async (e) => {
        settingLoading(true)
        e.preventDefault();
        window.scrollTo({top:0, left:0, behavior:"smooth"})
        try{
            const response =await  api.post("/register/", formData)
            const data = await response.data
            if (data.email) {
                settingAutheticated(true)
            }
            settingLoading(false)
        } catch(error) {
            for (const dat in error.response.data) {
                setError(error.response.data[dat][0])
            }
            settingLoading(false)
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
    })
    if ([e.target.name] == "password2"){
        setChange(true)
        e.target.value == formData.password1 ? setPwdMatch(true) : setPwdMatch(false)
    }
    }
  return (
    <div className='min-w-full'>
        <p className='smMidText text-red-700 '>{errors}</p>
        <form onSubmit={handleSubmit}>
            <label  className="block text-sm my-2" htmlFor="username">Username</label>
            <input type="text"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='username'  value={formData.username} required={true} onChange={handleChange}/>
            <label  className="block text-sm my-2" htmlFor="email">Email</label>
            <input type="email"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='email' required={true} value={formData.email} onChange={handleChange}/>
            <label  className="block text-sm my-2" htmlFor="password">Password</label>
            <input type="password"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='password1' required={true}  value={formData.password1} onChange={handleChange} />
            <p className='opacity-70 smMidText py-2 '>Password must be at least 8 characters</p>
            <label  className="block text-sm my-2" htmlFor="confirmpwd">Confirm Password</label>
            <input  type="password"  className="outline-none bg-gray-600 block w-full py-2 px-1 rounded-sm bg-opacity-15 text-gray-600" name='password2' required={true}  value={formData.password2} onChange={handleChange}/>
            {
              change ? pwdMatch ? <p className='text-green-600 smMidText font-bold'>Password Match</p> : <p className='textRed smMidText font-bold'>Password do not match.</p> : null
            }
            <p className='my-3 text-sm fontNewTimes tracking-wider text-gray-800'>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.</p>
            <div>
            <button disabled={isLoading} className={`bgBlue block w-full p-2 rounded-sm text-white font-bold hover:opacity-85' type='submit ${isLoading ? "opacity-50": null}`} type='submit'>Create</button>
            </div>
        </form>
     </div>
  )
}

export default Register
