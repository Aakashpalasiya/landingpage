import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../utils/Cart.png'
const Header = () => {
  return (
    <>
    <div className='bg-white grid grid-cols-2 py-5 px-10 '>
      <div className='text-2xl font-semibold '>Restaurant Landing Page</div>
      
            <ul className='flex justify-between items-center  '>
              <Link to='/'><li className='text-xl font-normal '>Landing</li></Link>
            <Link to='home'>  <li className='text-xl font-normal'>Home</li></Link>
            <Link to='gallery'>  <li className='text-xl font-normal'>Gallery</li></Link>
              <Link to='shop'><li className='text-xl font-normal'>Shop</li></Link>
              <Link to='blog'><li className='text-xl font-normal'>Blog</li></Link>
             <Link to='about'> <li className='text-xl font-normal'>About</li></Link>
             <Link to='team'><li className='text-xl font-normal'>Team</li></Link>
             <Link to='contact'><li className='text-xl font-normal'>Contact</li></Link>
             <Link to='cart'> <li className='text-xl font-normal'><img src={Cart} className='h-[25px]'/></li></Link>
              
              
             
             
            </ul>

    </div>
    </>
  )
}

export default Header