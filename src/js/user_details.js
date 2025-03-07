import axios from "axios"
// import { useState } from "react"
export  const userDetails = async () => {
    const token = localStorage.getItem("access_token")
    // let result = ""
    if (token) {
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`,
            }
        }
        try {
            
            axios.get('http://localhost:8000/api/v1/info/', config)
            .then(res => {
                // let result =  
                return res.data
            })
          
        } catch (error) {
            console.log(error)
            return("token invalid")
        }
        // console.log(result)
        
// userInfo()
}
}