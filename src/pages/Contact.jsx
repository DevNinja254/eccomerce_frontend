import React, { useEffect } from 'react'
import MainLayout from "../layout/MainLayout"
import { FaLocationDot as Location} from "react-icons/fa6";
import { IoCallOutline as Call} from "react-icons/io5";
import { MdOutlineMailOutline as Email } from "react-icons/md";
import EaseNav from '../components/ui/EaseNav';
const Contact = () => {
    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior:"instant"})
    })
  return (
    <MainLayout>
        <EaseNav/>
        <div className='sm:w-5/6 m-auto'>
            <div className='mx-4 text-center my-3 pt-6'>
                <h1 className='text-4xl capitalize mb-2 '>Get in touch</h1>
                <p className='text-gray-800 opacity-90   text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, perferendis ratione deleniti accusantium tenetur deserunt cumque molestiae quia totam eveniet atque officia voluptas fugiat </p>
            </div>
            <div className='mx-4 lg:bg-white bg-gray-100 bg-opacity-70 grid place-content-center p-3 rounded-md textBlue gap-7 mb-5 lg:flex lg:items-center lg:justify-evenly lg:my-10'>
                <div className='py-4 mt-3 lg:bg-gray-100 bg-opacity-70 lg:p-10 rounded-md'>
                    <div className='grid place-content-center w-full font-bold '><Location size={34}/></div>
                    <p className='mt-5 text-center text-sm capitalize  text-gray-900 font-bold mb-2'>102 Street 2714 Donovan</p>
                    <p className='text-sm text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='py-4 mt-3 lg:bg-gray-100 bg-opacity-70 lg:p-10 rounded-md'>
                    <div className='grid place-content-center w-full font-bold '><Call size={34}/></div>
                    <p className='mt-5 text-center text-sm capitalize  text-gray-900 font-bold mb-2'>+2547 1393 4480</p>
                    <p className='text-sm text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='py-4 mt-3 lg:bg-gray-100 bg-opacity-70 lg:p-10 rounded-md'>
                    <div className='grid place-content-center w-full font-bold '><Email size={34}/></div>
                    <p className='mt-5 text-center text-sm capitalize  text-gray-900 font-bold mb-2'>info@example.com</p>
                    <p className='text-sm text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>
            <div className='lg:w-4/5 2xl:p-10 lg:m-auto lg:bg-gray-50 lg:p-7 lg:mb-3 rounded-md'>
                <div className='m-4 my-10 text-center borderGrayB pb-10 lg:my-16'>
                    <p className='text-4xl capitalize mb-2'>Send us</p>
                    <p className='text-sm  md:text-md'>Contact us for all your questions and opinions, or you cn solve your problems in a shorter time with our contact offices</p>
                </div>
                <form action="" className='mx-4 my-5 pt-3 '>
                    <div className='lg:grid grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-sm py-2" htmlFor="Name">Name</label>
                            <input className='block bg-gray-500 w-full py-2 rounded-md bg-opacity-10 outline-none text-gray-700 px-2' type="text" name='name' />
                            </div>
                        <div>
                            <label className="block text-sm py-2" htmlFor="email">Email*</label>
                            <input className='block bg-gray-500 w-full py-2 rounded-md bg-opacity-10 outline-none text-gray-700 px-2' type="email" required name="email" />
                        </div>
                    </div>
                    <label className="block text-sm py-2" htmlFor="number">Phone Number</label>
                    <input className='block bg-gray-500 w-full py-2 rounded-md bg-opacity-10 outline-none text-gray-700 px-2' type="number" required name="number" />
                    <label className="block text-sm py-2" htmlFor="message">Your Message</label>
                    <textarea name="message" id="messade" rows={5} className='block bg-gray-500 w-full py-2 rounded-md bg-opacity-10 outline-none text-gray-700 px-2'></textarea>
                    <button className='mt-2 bgBlue smMidText text-white font-bold p-3 rounded-md hover:opacity-90'>Send Message</button>
                </form>
            </div>
        </div>
    </MainLayout>
  )
}

export default Contact
