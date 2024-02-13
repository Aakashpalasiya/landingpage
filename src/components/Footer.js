import React from 'react'
import facebook from '../utils/facebook.jpg'
import tweeter from '../utils/tweeter.png'
import googleplus from '../utils/googleplus.png'
import wifi from '../utils/wifi.jpg'
const Footer = () => {
  return (
    <>
     <div className='w-[100%] mx-auto bg-black'>
     <div className='grid grid-cols-2  gap-40 justify-between items-center '>
      <div className='text-lg text-end text-gray-200'>Designed by <span className='text-lg font-bold'>Elegant Themes</span> | powered by <span className='text-lg font-bold'>World Press</span></div>
      <div className='flex justify-end mr-20 gap-5 items-center '>
        <img src={facebook} className='h-10 '/>
        <img src={tweeter} className='h-10'/>
        <img src={googleplus} className='h-10'/>
        <img src={wifi} className='h-10'/>
      </div>
    </div>
     </div>
    </>
  )
}

export default Footer