import React from 'react'
import {MdLocalGroceryStore} from "react-icons/md";
import { Link } from 'react-scroll';
import {BsCart4} from 'react-icons/bs';
import CartBadge from './CartBadge';

function Navbar() {
  return (
    <div className='   fixed  z-10 w-full'>
      <div className=' flex flex-row justify-between items-center  md:px-32 px-5 p-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
        <div className=' flex gap-1'>
          <span><MdLocalGroceryStore size={35} /> </span>
          <h1 className=' text-xl font-semibold cursor-pointer'> Mk Store</h1>
        </div>
        <nav className=' hidden md:flex flex-row items-center gap-16'>
          <Link to='home' spy={true}  smooth={true} duration={500} className=' font-semibold text-lg hover:text-orange-500  cursor-pointer'>Home</Link>
          <Link to='fruit' spy={true}  smooth={true} duration={500} className=' font-semibold text-lg hover:text-orange-500  cursor-pointer'>Fruit</Link>
          <Link to='dairy' spy={true}  smooth={true} duration={500} className=' font-semibold text-lg hover:text-orange-500  cursor-pointer'>Dairy</Link>
          <Link to='new' spy={true}  smooth={true} duration={500} className=' font-semibold text-lg hover:text-orange-500  cursor-pointer'>New</Link>
          <Link to='contact' spy={true}  smooth={true} duration={500} className=' font-semibold text-lg hover:text-orange-500  cursor-pointer'>Contact</Link>  
        </nav>
        <div className=' rounded-full px-2 py-2 border-4 border-orange-500 relative items-center'><BsCart4 size={25}/> <CartBadge size="w-[24px] h-[24px ]"  /> </div>
      </div>
    </div>
  )
}

export default Navbar