import React from 'react'
import MainLayout from '../layout/MainLayout'

const About = () => {
  return (
    <MainLayout>
        <div>
          <div className='relative'>
            <figure>
              <img className='aboutPic' src={require("../assets/images/kettle.jpg")} alt="" />
            </figure>
            <div className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-20 text-gray-50 font-bold grid place-content-center font-mono tracking-tight'>
              <p className='text-center text-2xl font-extrabold'>About for Floshop</p>
              <p className='text-center my-1 text-lg'>We can do more</p>
            </div>
          </div>
          <div className='m-3 my-5 fontNewTimes tracking-wide sm:w-5/6 sm:mx-auto'>
            <div className='my-4'>
              <p>
              At Floshop, we believe shopping online should be effortless, inspiring, and trustworthy. Founded in 2022, we’re on a mission to connect you with products that elevate your everyday life—crafted with care, curated for quality, and delivered with a smile.To redefine online shopping by offering a seamless experience where quality meets convenience. We’re here to empower your choices, whether you’re upgrading your home, refreshing your wardrobe, or finding the perfect gift.
              </p>
            </div>
            <div className='my-7 pt-5 lg:grid grid-cols-2'>
              <figure className='py-5 md:w-4/5'>
                <img className='block w-full object-cover' src={require("../assets/images/kettle.jpg")} alt="" />
              </figure>
              <div>
                <figcaption className='mb-5 py-3 text-lg capitalize fontNewTimes tracking-wide'>Jane doe - floshop ceo</figcaption>
                
                <div>
                  <h3 className='text-lg font-bold mb-2 tracking-wide'>Our Story</h3>
                  <p>Story
                    It all began when our founder, [Founder’s Name], noticed a gap in the market: a lack of platforms that combined exceptional products, ethical practices, and personalized service. What started as a small idea in [Location/Garage/Home Office] has blossomed into a global community of shoppers who value authenticity and innovation. Today, we partner with [Number] brands and artisans worldwide to bring you unique, responsibly-made goods.
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-4 2xl:grid-cols-3'>
              <div className='mb-5'>
                <h3 className='text-lg font-bold mb-2 tracking-wide'>Why Choose Us?</h3>
                <p className='font-bold text-gray-800 mb-2'>Curated Selection: <span className='font-normal text-md tracking-wider'>Every product is handpicked for quality, durability, and style.</span></p>
                <p className='font-bold text-gray-800 mb-2'>Sustainable Practices: <span className='font-normal text-md tracking-wider'>From eco-friendly packaging to carbon-neutral shipping, we care for the planet.</span></p>
                <p className='font-bold text-gray-800 mb-2'>Customer First: <span className='font-normal text-md tracking-wider'>Our 24/7 support team and hassle-free returns ensure you shop with confidence.</span></p>
                <p className='font-bold text-gray-800 mb-2'>Secure Shopping: <span className='font-normal text-md tracking-wider'>Your data is protected with state-of-the-art encryption technology.</span></p>
              </div>
              <div className='mb-5'>
                <h2 className='font-bold text-gray-800 mb-2'>Meet the Team</h2>
                We’re a diverse group of dreamers, designers, and customer champions united by a shared passion for excellence. From tech experts to logistics pros, our team works tirelessly to ensure your experience is nothing short of exceptional.
              </div>
              <div>
                <h2 className='font-bold text-gray-800 mb-2'>Join Our Journey</h2>
                <p>Thank you for being part of our story. Together, we’re building more than a marketplace—we’re creating a movement toward mindful consumption.</p>
              </div>
            </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default About
