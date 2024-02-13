import React from 'react'
import restimage from '../../utils/Restorentimg.jpeg'
import downarrow from '../../utils/downarrow.png'
const ImageSection = () => {
  return (
<>
<div className='h-screen relative'>
  <img className='h-[87%] w-full absolute opacity-90' src={restimage} />
  <div className='absolute inset-0 flex justify-center items-center'>
    <div className='flex justify-center items-center flex-col gap-10'>
      <h1 className='text-center font-bold text-6xl  text-white'>Only Quality Food</h1>
      <p className='text-center text-lg text-white w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum laboriosam praesentium facilis eos iste labore mollitia. Quod pariatur itaque ut quisquam facere laborum dolores illo natus. Odio, recusandae laboriosam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum laboriosam praesentium facilis e</p>
      <div className='flex justify-center font-medium gap-5 items-center'>
        <button className="px-4 py-2 border border-white text-white">View Menu</button>
        <button className='text-white bg-red-500 px-4 py-2 rounded-lg text-center text-lg'>Reservation</button>
      </div>
        <img src={downarrow} className='h-11 cursor-pointer'/>
    </div>
  </div>
</div>

</>
  )
}

export default ImageSection