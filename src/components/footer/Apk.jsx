import React from "react"
import { IoCallOutline as Call } from "react-icons/io5"
import { PiFacebookLogo as Facebook } from "react-icons/pi"
import { PiTwitterLogoFill as Twitter } from "react-icons/pi"
import { PiInstagramLogo as Instagram } from "react-icons/pi"
import { NavLink } from "react-router-dom"
export const Apk = () => {
    return (
        <div className=" py-5 my-3">
           <div className="px-3 md:flex items-center justify-around">
            <div className="flex items-center justify-start gap-3">
                <div className="borderGray p-2 rounded-full text-gray-600 my-2">
                    <Call size={20}/> 
                </div>
                <div>
                    <p className="font-bold">0713 934 480</p>
                    <p className="text-gray-500 smMidText">working 8:00 - 22:00</p>
                </div>
            </div>
            <div className="sm:flex items-center justify-start sm:my-10 gap-3">
                <div className="mt-10 sm:mt-0">
                    <h5 className="font-bold text-gray-800">Download App on Mobile:</h5>
                    <p className="text-sm text-gray-600">15% discount on your first purchase</p>
                </div>
                <div className="my-4 flex items-center justify-start gap-3">
                    <img src={require("../../assets/images/google-play.png")} alt="" />
                    <img src={require("../../assets/images/app-store.png")} alt="" />
                </div>
                <div className="flex items-center gap-3 my-3 textBlue font-bold">
                    <span>
                        <Facebook size={25}/>
                    </span>
                    <span className="borderGray p-1 rounded-full">
                        <Twitter size={20}/>
                    </span>
                    <span className="borderGray p-1 rounded-full">
                        <Instagram className="font-bold" size={20}/>
                    </span>
                </div>
            </div>
           </div>
           <div className="text-gray-900 text-sm borderGrayT borderGrayB px-3 mt-5 py-4 text-opacity-70 md:border-b-0 sm:flex sm:justify-between sm:items-start">
            <p>Copyright &copy; 2025 Flora shopify Site. All rights reserved. <br className="sm:hidden"/>Powered by info.imbaq@gmail.com</p>
            <div className="mt-5 sm:mt-0 flex items-center justify-start gap-4 sm:justify-end sm:gap-2">
                <NavLink className="whitespace-nowrap inline-block" to="#">Privacy</NavLink>
                <NavLink className="whitespace-nowrap inline-block" to="#">Terms and Conditons</NavLink>
                <NavLink className="whitespace-nowrap inline-block" to="#">Cookie</NavLink>
            </div>
           </div>
        </div>
    )
}
