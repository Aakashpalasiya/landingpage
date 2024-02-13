import React from 'react'
import restimage from '../../utils/Restorentimg.jpeg'
const OpeningHours = () => {
  return (
   <>
   <div className='h-screen w-full relative '>
    <img className='h-[100%] w-full opacity-90' src={restimage} />
    <div className='absolute inset-0 flex justify-center items-center'>
        <div className='flex gap-10  rounded-lg'>
            <div className='flex flex-col justify-center items-center w-[50%] p-10 gap-5 px-10 py-5  bg-black text-white'>
                <h1>Hours of operation</h1>
                <h3>Mon -Fri</h3>
                <h3>10:00 am -1:00 pm</h3>
                <h3>4:00pm -10:30 pm</h3>
                <p className='bg-yellow-400 h-[2px] w-full'/>
                <h3>SAT</h3>
                <h3>3:00pm -10:30 pm</h3>
                <p className='bg-yellow-400 h-[2px] w-full'/>

                <h3>SUN</h3>
                <h3>We are closed</h3>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Make a reservation</button>
            </div>
            <div className='flex gap-4 flex-col text-white justify-center items-center px-10 py-5 bg-black w-[50%]'>
                <h1>Drop us a line</h1>
                <h3 className='text-center'>Dont be shy. Let us know if you have any questions</h3>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Contact us</button>
                <div className='flex flex-col gap-4 w-full'>
                    <h1 className='text-center'>Our NewsLetter</h1>
                    <h3 className='text-center'>Dialogue is an essential part of any script</h3>
                    <input type='text' placeholder='First Name' className='bg-gray-300 px-4 py-2'/>
                    <input type='text' placeholder='Last Name' className='bg-gray-300 px-4 py-2'/>
                    <input type='email' placeholder='E-mail' className='bg-gray-300 px-4 py-2'/>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md'>CONTACT US</button>
                </div>
            </div>
        </div>
    </div>
</div>

   </>
  )
}

export default OpeningHours